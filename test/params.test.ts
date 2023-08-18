import { params } from "@ampt/sdk";
import { describe, expect, it } from "vitest";

describe("params", () => {
  it("should have url param", async () => {
    const stage = await params("ENV_NAME");
    expect("wrong stage name").toEqual(stage);
  });
});
