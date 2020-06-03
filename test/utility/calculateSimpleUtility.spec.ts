import { sampleData } from "../../src/data/sampleData";
import { calculateSimpleUtility } from "../../src/utility/calculateSimpleUtility";

describe("Basic tests", () => {
  it("Handles 10x10 case", () => {
    const utility = calculateSimpleUtility(
      sampleData.problem,
      sampleData.solution
    );

    expect(utility).toBe(162);
  });
});
