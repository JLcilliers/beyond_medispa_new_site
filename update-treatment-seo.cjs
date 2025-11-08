/**
 * Script to systematically update all treatment TinaPage components with SEOHead
 * This ensures consistent SEO implementation across all 43+ treatment pages
 */

const fs = require('fs');
const path = require('path');

// Map of file paths to their URL routes (from tina/config.ts router)
const TREATMENT_ROUTES = {
  // Facial treatments
  'facial/hydrafacial-edinburgh/HydrafacialEdinburghTinaPage.tsx': '/procedures/facial/hydrafacial-edinburgh',
  'facial/hydrafacial-london/HydrafacialLondonTinaPage.tsx': '/procedures/facial/hydrafacial-london',
  'facial/microneedling-edinburgh/MicroneedlingEdinburghTinaPage.tsx': '/procedures/facial/microneedling-edinburgh',
  'facial/microneedling-london/MicroneedlingLondonTinaPage.tsx': '/procedures/facial/microneedling-london',
  'facial/dermaplaning/DermaplaningTinaPage.tsx': '/procedures/facial/dermaplaning',
  'facial/exosome/ExosomeTinaPage.tsx': '/procedures/facial/exosome',
  'facial/hydra-tite/HydraTiteTinaPage.tsx': '/procedures/facial/hydratite',
  'facial/keravive/KeraviveTinaPage.tsx': '/procedures/facial/keravive',
  'facial/led-facial/LEDFacialTinaPage.tsx': '/procedures/facial/led-facial',
  'facial/oxygen-facial/OxygenFacialTinaPage.tsx': '/procedures/facial/oxygen-facial',
  'facial/skin-scanner/SkinScannerTinaPage.tsx': '/procedures/facial/skin-scanner',

  // Injectables
  'injectables/AntiWrinkleTinaPage.tsx': '/procedures/injectables/anti-wrinkle',
  'injectables/DermalFillerTinaPage.tsx': '/procedures/injectables/dermal-filler',
  'injectables/ProfhiloTinaPage.tsx': '/procedures/injectables/profhilo',
  'injectables/PolynucleotidesTinaPage.tsx': '/procedures/injectables/polynucleotides',
  'injectables/BiofillerEdinburghTinaPage.tsx': '/procedures/injectables/biofiller-edinburgh',
  'injectables/BiofillerLondonTinaPage.tsx': '/procedures/injectables/biofiller-london',
  'injectables/PRPTinaPage.tsx': '/procedures/injectables/prp',
  'injectables/CarboxyTinaPage.tsx': '/procedures/injectables/carboxy',
  'injectables/SclerotherapyTinaPage.tsx': '/procedures/injectables/sclerotherapy',
  'injectables/MoleRemovalTinaPage.tsx': '/procedures/injectables/mole-removal',
  'injectables/NeofoundTinaPage.tsx': '/procedures/injectables/neofound',
  'injectables/IVDripTinaPage.tsx': '/procedures/injectables/iv-drip',
  'injectables/VitaminDTinaPage.tsx': '/procedures/injectables/vitamin-d',
  'injectables/B12TinaPage.tsx': '/procedures/injectables/b12',
  'injectables/BiotinTinaPage.tsx': '/procedures/injectables/biotin',
  'injectables/GlutathioneTinaPage.tsx': '/procedures/injectables/glutathione',
  'injectables/MagnesiumTinaPage.tsx': '/procedures/injectables/magnesium',
  'injectables/AllergyTinaPage.tsx': '/procedures/injectables/allergy',

  // Body treatments
  'body/LaserHairRemovalTinaPage.tsx': '/procedures/body/laser-hair-removal',
  'body/CoolSculptingTinaPage.tsx': '/procedures/body/coolsculpting',
  'body/ExilisTinaPage.tsx': '/procedures/body/exilis',
  'body/HifuTinaPage.tsx': '/procedures/body/hifu',
  'body/CoolLaserTinaPage.tsx': '/procedures/body/cool-laser',
  'body/ElectrolysisTinaPage.tsx': '/procedures/body/electrolysis',
  'body/CMSlimTinaPage.tsx': '/procedures/body/cmslim',
  'body/UnisonTinaPage.tsx': '/procedures/body/unison',
  'body/VanquishTinaPage.tsx': '/procedures/body/vanquish',

  // Peels
  'peels/Medik8EdinburghTinaPage.tsx': '/procedures/peels/medik8-edinburgh',
  'peels/Medik8LondonTinaPage.tsx': '/procedures/peels/medik8-london',
  'peels/ZOEdinburghTinaPage.tsx': '/procedures/peels/zo-edinburgh',
  'peels/ZOLondonTinaPage.tsx': '/procedures/peels/zo-london',
  'peels/ObagiTinaPage.tsx': '/procedures/peels/obagi',
};

const BASE_PATH = path.join(__dirname, 'frontend', 'components', 'pages', 'procedures');

function getRelativeSEOImportPath(filePath) {
  const depth = filePath.split('/').length - 1;
  const prefix = '../'.repeat(depth + 3); // +3 for pages/procedures/category
  return `${prefix}SEO/SEOHead`;
}

function updateTinaPageComponent(relativePath, pagePath) {
  const fullPath = path.join(BASE_PATH, relativePath);

  if (!fs.existsSync(fullPath)) {
    console.error(`❌ File not found: ${relativePath}`);
    return false;
  }

  let content = fs.readFileSync(fullPath, 'utf8');

  // Check if already updated
  if (content.includes('SEOHead')) {
    console.log(`⏭️  Already updated: ${relativePath}`);
    return true;
  }

  // Get the relative import path for SEOHead
  const seoImportPath = getRelativeSEOImportPath(relativePath);

  // Add SEOHead import after the Content import
  const contentImportRegex = /(import.*Content.*from.*;\n)/;
  if (contentImportRegex.test(content)) {
    content = content.replace(
      contentImportRegex,
      `$1import { SEOHead } from "${seoImportPath}";\n`
    );
  } else {
    console.error(`❌ Could not find Content import in: ${relativePath}`);
    return false;
  }

  // Find the return statement and wrap content with SEOHead
  const returnRegex = /return <(\w+Content) data=\{graphQLResponse\} \/>;/;
  const match = content.match(returnRegex);

  if (!match) {
    console.error(`❌ Could not find return statement in: ${relativePath}`);
    return false;
  }

  const contentComponent = match[1];

  // Add data extraction before return
  const dataExtractionCode = `  const treatmentData = graphQLResponse.data.treatment;\n\n`;

  // Replace the return statement
  const newReturn = `return (
    <>
      <SEOHead
        seo={treatmentData.seo}
        schemaMarkup={treatmentData.schemaMarkup}
        defaultTitle={treatmentData.title}
        pagePath="${pagePath}"
        treatmentCategory={treatmentData.category}
        location={treatmentData.location}
      />
      <${contentComponent} data={graphQLResponse} />
    </>
  );`;

  // Find the position to insert data extraction
  const returnIndex = content.indexOf('return <');
  if (returnIndex === -1) {
    console.error(`❌ Could not find return statement position in: ${relativePath}`);
    return false;
  }

  // Insert data extraction before return
  content = content.slice(0, returnIndex) + dataExtractionCode + content.slice(returnIndex);

  // Now replace the return statement
  content = content.replace(returnRegex, newReturn);

  // Write the updated content
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`✅ Updated: ${relativePath}`);
  return true;
}

// Main execution
console.log('🚀 Starting treatment page SEO update...\n');

let successCount = 0;
let failureCount = 0;
let skippedCount = 0;

for (const [relativePath, pagePath] of Object.entries(TREATMENT_ROUTES)) {
  const result = updateTinaPageComponent(relativePath, pagePath);
  if (result === true) {
    if (fs.readFileSync(path.join(BASE_PATH, relativePath), 'utf8').includes('SEOHead')) {
      successCount++;
    } else {
      skippedCount++;
    }
  } else {
    failureCount++;
  }
}

console.log('\n📊 Update Summary:');
console.log(`✅ Successfully updated: ${successCount} files`);
console.log(`⏭️  Already updated (skipped): ${skippedCount} files`);
console.log(`❌ Failed: ${failureCount} files`);
console.log(`📝 Total processed: ${Object.keys(TREATMENT_ROUTES).length} files`);

if (failureCount > 0) {
  console.log('\n⚠️  Some files failed to update. Please review the errors above.');
  process.exit(1);
} else {
  console.log('\n🎉 All treatment pages successfully updated with SEOHead!');
}
