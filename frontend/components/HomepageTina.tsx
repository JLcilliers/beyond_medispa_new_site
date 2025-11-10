"use client";
import { MaintenancePage } from "./pages/MaintenancePage";
import Homepage from "./Homepage";
import { useAuth } from "../contexts/AuthContext";

/**
 * HomepageTina - Shows maintenance page or full site based on authentication
 *
 * TinaCMS Cloud project was deleted and cannot be recreated due to 403 errors.
 * This component now shows MaintenancePage to public users, but allows authenticated
 * staff/QA users to access the full site for testing while it's being built.
 *
 * Authentication: Users can click "Staff/QA Access" at the bottom of the maintenance
 * page to enter a password and access the full site.
 *
 * Original functionality (commented out to allow build without TinaCMS):
 * - Fetched content from TinaCMS Cloud via generated client
 * - Displayed HomepageContent with fetched data
 * - Showed loading spinner during fetch
 * - Showed MaintenancePage on error
 */
export default function HomepageTina() {
  const { isAuthenticated } = useAuth();

  // Show full site to authenticated users, maintenance page to everyone else
  return isAuthenticated ? <Homepage /> : <MaintenancePage />;
}
