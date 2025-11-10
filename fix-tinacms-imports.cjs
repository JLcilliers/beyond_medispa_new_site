const fs = require('fs');
const path = require('path');

// List of all files that need fixing
const files = [
  'frontend/components/pages/procedures/peels/ZOLondonTinaPage.tsx',
  'frontend/components/pages/procedures/peels/Medik8LondonTinaPage.tsx',
  'frontend/components/pages/procedures/peels/ObagiTinaPage.tsx',
  'frontend/components/pages/procedures/peels/ZOEdinburghTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/VitaminDTinaPage.tsx',
  'frontend/components/pages/procedures/peels/Medik8EdinburghTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/PolynucleotidesTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/ProfhiloTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/SclerotherapyTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/NeofoundTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/PRPTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/IVDripTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/MagnesiumTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/MoleRemovalTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/DermalFillerTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/GlutathioneTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/BiotinTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/CarboxyTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/BiofillerEdinburghTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/BiofillerLondonTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/AllergyTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/AntiWrinkleTinaPage.tsx',
  'frontend/components/pages/procedures/injectables/B12TinaPage.tsx',
  'frontend/components/pages/procedures/facial/oxygen-facial/OxygenFacialTinaPage.tsx',
  'frontend/components/pages/procedures/facial/skin-scanner/SkinScannerTinaPage.tsx',
  'frontend/components/pages/procedures/facial/led-facial/LEDFacialTinaPage.tsx',
  'frontend/components/pages/procedures/facial/microneedling-edinburgh/MicroneedlingEdinburghTinaPage.tsx',
  'frontend/components/pages/procedures/facial/microneedling-london/MicroneedlingLondonTinaPage.tsx',
  'frontend/components/pages/procedures/facial/hydrafacial-london/HydrafacialLondonTinaPage.tsx',
  'frontend/components/pages/procedures/facial/keravive/KeraviveTinaPage.tsx',
  'frontend/components/pages/procedures/facial/exosome/ExosomeTinaPage.tsx',
  'frontend/components/pages/procedures/facial/hydra-tite/HydraTiteTinaPage.tsx',
  'frontend/components/pages/procedures/facial/hydrafacial-edinburgh/HydrafacialEdinburghTinaPage.tsx',
  'frontend/components/pages/procedures/body/VanquishTinaPage.tsx',
  'frontend/components/pages/procedures/facial/dermaplaning/DermaplaningTinaPage.tsx',
  'frontend/components/pages/procedures/body/LaserHairRemovalTinaPage.tsx',
  'frontend/components/pages/procedures/body/UnisonTinaPage.tsx',
  'frontend/components/pages/procedures/body/ExilisTinaPage.tsx',
  'frontend/components/pages/procedures/body/HifuTinaPage.tsx',
  'frontend/components/pages/procedures/body/CoolLaserTinaPage.tsx',
  'frontend/components/pages/procedures/body/CoolSculptingTinaPage.tsx',
  'frontend/components/pages/procedures/body/ElectrolysisTinaPage.tsx',
  'frontend/components/pages/procedures/body/CMSlimTinaPage.tsx',
  'frontend/contexts/TinaCMSProvider.tsx'
];

let fixedCount = 0;
let errorCount = 0;

console.log(`Starting to fix ${files.length} files...`);

files.forEach((file) => {
  const filePath = path.join(__dirname, file);

  try {
    // Read the file
    const content = fs.readFileSync(filePath, 'utf8');

    // Check if it imports from TinaCMS client
    if (!content.includes('tina/__generated__/client')) {
      console.log(`✓ Skipped ${file} - no TinaCMS import`);
      return;
    }

    // Extract component name from filename
    const componentName = path.basename(file, '.tsx');

    // Calculate relative path to MaintenancePage
    const fileDir = path.dirname(file);
    const relativeDepth = fileDir.split('/').length - 2; // -2 for 'frontend/components'
    const relativePath = '../'.repeat(relativeDepth) + 'pages/MaintenancePage';

    // Create new content
    const newContent = `"use client";
import { MaintenancePage } from "${relativePath}";

/**
 * ${componentName} - Currently showing maintenance page
 *
 * TinaCMS Cloud project was deleted and cannot be recreated due to 403 errors.
 * This component now directly shows the MaintenancePage until TinaCMS is restored.
 *
 * Original functionality (disabled to allow build without TinaCMS):
 * - Fetched procedure/treatment content from TinaCMS Cloud
 * - Displayed treatment-specific information
 * - Showed MaintenancePage on error
 */
export default function ${componentName}() {
  // TinaCMS is currently unavailable - show maintenance page directly
  // This allows the site to build and deploy without TinaCMS dependencies
  return <MaintenancePage />;
}
`;

    // Write the new content
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✓ Fixed ${file}`);
    fixedCount++;

  } catch (error) {
    console.error(`✗ Error fixing ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\nComplete! Fixed ${fixedCount} files, ${errorCount} errors.`);
