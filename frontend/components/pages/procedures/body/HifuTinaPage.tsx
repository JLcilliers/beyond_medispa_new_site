"use client";
import { MaintenancePage } from "../../../pages/MaintenancePage";

/**
 * HifuTinaPage - Currently showing maintenance page
 *
 * TinaCMS Cloud project was deleted and cannot be recreated due to 403 errors.
 * This component now directly shows the MaintenancePage until TinaCMS is restored.
 *
 * Original functionality (disabled to allow build without TinaCMS):
 * - Fetched procedure/treatment content from TinaCMS Cloud
 * - Displayed treatment-specific information
 * - Showed MaintenancePage on error
 */
export default function HifuTinaPage() {
  // TinaCMS is currently unavailable - show maintenance page directly
  // This allows the site to build and deploy without TinaCMS dependencies
  return <MaintenancePage />;
}
