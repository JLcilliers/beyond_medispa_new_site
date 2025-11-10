"use client";
import { useState, useEffect } from "react";
import { client } from "../tina/__generated__/client";
import HomepageContent from "./HomepageContent";
import { MaintenancePage } from "./pages/MaintenancePage";

export default function HomepageTina() {
  const [graphQLResponse, setGraphQLResponse] = useState<any>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const result = await client.queries.homepage({
          relativePath: "home.json",
        });
        setGraphQLResponse(result);
      } catch (err) {
        console.error("Error fetching homepage:", err);
        setError(err instanceof Error ? err.message : "Failed to load content");
      }
    };
    fetchContent();
  }, []);

  if (error) {
    // Show maintenance page when TinaCMS fails to load
    // This provides a professional landing page while TinaCMS issues are resolved
    return <MaintenancePage />;
  }

  if (!graphQLResponse) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#A38E78]"></div>
          <p className="mt-4 text-gray-600">Loading homepage...</p>
        </div>
      </div>
    );
  }

  return <HomepageContent data={graphQLResponse} />;
}
