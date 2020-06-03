import { Problem } from "../../types/Problem";

export function calculateTotalEarliness({ problem, solution }: Problem) {
  return solution
    .slice(1, Math.ceil(solution.length / 2))
    .reduce(([px, sum], x, i) => [x, sum + (i + 1) * problem[px][x]], [
      solution[0],
      0,
    ])[1];
}
