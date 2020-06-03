export function calculateSimpleUtility(
  problemMatrix: number[][],
  path: number[]
) {
  return path
    .slice(1)
    .reduce(([px, sum], x) => [x, sum + problemMatrix[px][x]], [path[0], 0])[1];
}
