"use client";
import { MaintenancePage } from "./pages/MaintenancePage";

/**
 * HomepageTina - Currently showing maintenance page
 *
 * TinaCMS Cloud project was deleted and cannot be recreated due to 403 errors.
 * This component now directly shows the MaintenancePage until TinaCMS is restored.
 *
 * Original functionality (commented out to allow build without TinaCMS):
 * - Fetched content from TinaCMS Cloud via generated client
 * - Displayed HomepageContent with fetched data
 * - Showed loading spinner during fetch
 * - Showed MaintenancePage on error
 */
export default function HomepageTina() {
  // TinaCMS is currently unavailable - show maintenance page directly
  // This allows the site to build and deploy without TinaCMS dependencies
  return <MaintenancePage />;
}
