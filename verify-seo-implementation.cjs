/**
 * Verification script to check SEO implementation coverage
 * Ensures all treatment pages have been updated with SEOHead
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 SEO IMPLEMENTATION VERIFICATION REPORT\n');
console.log('=' .repeat(80));

// Check 1: Verify SEOHead component exists
const seoHeadPath = path.join(__dirname, 'frontend', 'components', 'SEO', 'SEOHead.tsx');
const seoHeadExists = fs.existsSync(seoHeadPath);
console.log('\n📦 COMPONENT CHECK:');
console.log(seoHeadExists ? '✅ SEOHead component exists' : '❌ SEOHead component NOT FOUND');

// Check 2: Verify TinaCMS config has SEO fields
const tinaConfigPath = path.join(__dirname, 'frontend', 'tina', 'config.ts');
const tinaConfigContent = fs.readFileSync(tinaConfigPath, 'utf8');

console.log('\n🔧 TINACMS CONFIGURATION CHECK:');
console.log(tinaConfigContent.includes('import slugify') ? '✅ Slugify imported' : '❌ Slugify NOT imported');
console.log(tinaConfigContent.includes('const seoFields') ? '✅ SEO fields defined' : '❌ SEO fields NOT defined');
console.log(tinaConfigContent.includes('const schemaMarkupField') ? '✅ Schema markup field defined' : '❌ Schema markup field NOT defined');
console.log(tinaConfigContent.includes('const imageWithAlt') ? '✅ ImageWithAlt helper defined' : '❌ ImageWithAlt helper NOT defined');

// Check how many collections have SEO fields
const collectionNames = ['treatment', 'homepage', 'teamMember', 'page', 'faq', 'testimonial'];
let collectionsWithSEO = 0;

collectionNames.forEach(collection => {
  // Look for ...seoFields in the collection
  const regex = new RegExp(`name: "${collection}"[\\s\\S]*?\\.\\.\\. seoFields`, 'm');
  if (regex.test(tinaConfigContent)) {
    collectionsWithSEO++;
    console.log(`✅ ${collection} collection has SEO fields`);
  } else {
    console.log(`❌ ${collection} collection missing SEO fields`);
  }
});

console.log(`\n📊 Collections with SEO: ${collectionsWithSEO}/${collectionNames.length}`);

// Check 3: Verify all treatment pages have SEOHead
console.log('\n🎯 TREATMENT PAGE IMPLEMENTATION CHECK:');

const proceduresBase = path.join(__dirname, 'frontend', 'components', 'pages', 'procedures');
const categories = ['facial', 'injectables', 'body', 'peels'];

let totalFiles = 0;
let filesWithSEO = 0;
let filesMissingSEO = [];

categories.forEach(category => {
  const categoryPath = path.join(proceduresBase, category);

  if (!fs.existsSync(categoryPath)) {
    console.log(`⚠️  Category not found: ${category}`);
    return;
  }

  // Find all TinaPage files
  const findTinaPages = (dir) => {
    const files = [];
    const items = fs.readdirSync(dir);

    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files.push(...findTinaPages(fullPath));
      } else if (item.endsWith('TinaPage.tsx')) {
        files.push(fullPath);
      }
    });

    return files;
  };

  const tinaPages = findTinaPages(categoryPath);

  tinaPages.forEach(file => {
    totalFiles++;
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(proceduresBase, file);

    if (content.includes('import { SEOHead }') && content.includes('<SEOHead')) {
      filesWithSEO++;
    } else {
      filesMissingSEO.push(relativePath);
    }
  });
});

console.log(`\n📈 Treatment Pages Updated: ${filesWithSEO}/${totalFiles}`);

if (filesMissingSEO.length > 0) {
  console.log('\n❌ Files still missing SEOHead:');
  filesMissingSEO.forEach(file => console.log(`   - ${file}`));
} else {
  console.log('\n✅ All treatment pages have SEOHead implemented!');
}

// Summary
console.log('\n' + '='.repeat(80));
console.log('\n📋 SUMMARY:\n');

const allChecks = [
  { name: 'SEOHead component created', passed: seoHeadExists },
  { name: 'TinaCMS config updated with SEO fields', passed: tinaConfigContent.includes('const seoFields') },
  { name: 'All collections have SEO support', passed: collectionsWithSEO === collectionNames.length },
  { name: 'All treatment pages updated', passed: filesMissingSEO.length === 0 },
];

allChecks.forEach(check => {
  console.log(`${check.passed ? '✅' : '❌'} ${check.name}`);
});

const passedChecks = allChecks.filter(c => c.passed).length;
console.log(`\n🎯 Overall Progress: ${passedChecks}/${allChecks.length} checks passed`);

if (passedChecks === allChecks.length) {
  console.log('\n🎉 SUCCESS! SEO implementation is complete!');
  console.log('\n📝 NEXT STEPS:');
  console.log('1. Run `npm run build` in the frontend directory to regenerate GraphQL schema');
  console.log('2. Test the implementation by editing a treatment page in TinaCMS');
  console.log('3. Verify SEO meta tags appear correctly in the browser');
  console.log('4. Check schema markup using Google\'s Rich Results Test');
} else {
  console.log('\n⚠️  Some implementation steps are incomplete. Please review the errors above.');
}

console.log('\n' + '='.repeat(80));
