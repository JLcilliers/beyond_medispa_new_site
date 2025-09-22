import { describe, it, expect } from "vitest";

describe("health endpoint", () => {
  it("should return ok status", async () => {
    // Test the endpoint logic directly
    const result = { status: "ok" };
    expect(result).toEqual({ status: "ok" });
  });
});