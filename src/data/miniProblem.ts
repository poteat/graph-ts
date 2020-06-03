import { Problem } from "../types/Problem";

export const miniProblem: Problem = {
  problem: [
    [1000, 90, 140, 160],
    [90, 1000, 110, 150],
    [80, 90, 1000, 130],
    [70, 75, 100, 1000],
  ],
  solution: [3, 1, 2, 0],
  totalEarliness: 75,
  totalTardiness: 300,
  totalEarlinessAndTardiness: 375,
};
