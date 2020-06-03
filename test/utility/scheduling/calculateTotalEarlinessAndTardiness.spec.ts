import { miniProblem } from "../../../src/data/miniProblem";
import { sampleData } from "../../../src/data/sampleData";
import { Problem } from "../../../src/types/Problem";
import { calculateTotalEarlinessAndTardiness } from "../../../src/utility/schedling/calculateTotalEarlinessAndTardiness";

function testProblem(problem: Problem) {
  test("", () => {
    const totalEarlinessAndTardiness = calculateTotalEarlinessAndTardiness(
      problem
    );

    expect(totalEarlinessAndTardiness).toBe(problem.totalEarlinessAndTardiness);
  });
}

describe("Basic tests", () => {
  testProblem(miniProblem);
  testProblem(sampleData);
});
