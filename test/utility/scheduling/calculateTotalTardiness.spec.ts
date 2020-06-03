import { miniProblem } from "../../../src/data/miniProblem";
import { calculateTotalTardiness } from "../../../src/utility/schedling/calculateTotalTardiness";

describe("Basic tests", () => {
  test("Can handle a good case", () => {
    const totalTardiness = calculateTotalTardiness(miniProblem);

    expect(totalTardiness).toBe(miniProblem.totalTardiness);
  });
});
