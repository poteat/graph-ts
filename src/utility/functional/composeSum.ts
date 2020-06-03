export function composeSum<T>(f: (x: T) => number, g: (x: T) => number) {
  return (x: T) => f(x) + g(x);
}
