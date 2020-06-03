import { miniProblem } from "../../../src/data/miniProblem";
import { calculateTotalEarliness } from "../../../src/utility/schedling/calculateTotalEarliness";

describe("Basic tests", () => {
  test("Can handle a good case", () => {
    const totalEarliness = calculateTotalEarliness(miniProblem);

    expect(totalEarliness).toBe(miniProblem.totalEarliness);
  });
});
