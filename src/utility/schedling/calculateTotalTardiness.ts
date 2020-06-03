import { Problem } from "../../types/Problem";

export function calculateTotalTardiness({ problem, solution }: Problem) {
  return ((b) =>
    solution
      .slice(-b)
      .reduce(
        ([px, sum], x, i, z) => [x, sum + (z.length - i) * problem[px][x]],
        [solution[b - 1], 0]
      )[1])(Math.ceil(solution.length / 2));
}
