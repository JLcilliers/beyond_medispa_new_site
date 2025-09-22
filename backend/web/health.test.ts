import { describe, it, expect } from "vitest";
import { health } from "./health";

describe("health endpoint", () => {
  it("should return ok status", async () => {
    const result = await health();
    expect(result).toEqual({ status: "ok" });
  });
});