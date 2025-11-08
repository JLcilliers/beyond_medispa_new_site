"use client";
import { useState, useEffect } from "react";
import { client } from "../../../../../tina/__generated__/client";
import KeraviveContent from "./KeraviveContent";
import { SEOHead } from "../../../../SEO/SEOHead";

export default function KeraviveTinaPage() {
  const [graphQLResponse, setGraphQLResponse] = useState<any>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const result = await client.queries.treatment({
          relativePath: "keravive.json",
        });
        setGraphQLResponse(result);
      } catch (err) {
        console.error("Error fetching treatment:", err);
        setError(err instanceof Error ? err.message : "Failed to load content");
      }
    };
    fetchContent();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center p-8">
          <h1 className="text-2xl text-red-600 mb-4">Error Loading Content</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!graphQLResponse) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#A38E78]"></div>
          <p className="mt-4 text-gray-600">Loading treatment...</p>
        </div>
      </div>
    );
  }

  const treatmentData = graphQLResponse.data.treatment;

  return (
    <>
      <SEOHead
        seo={treatmentData.seo}
        schemaMarkup={treatmentData.schemaMarkup}
        defaultTitle={treatmentData.title}
        pagePath="/procedures/facial/keravive"
        treatmentCategory={treatmentData.category}
        location={treatmentData.location}
      />
      <KeraviveContent data={graphQLResponse} />
    </>
  );
}
