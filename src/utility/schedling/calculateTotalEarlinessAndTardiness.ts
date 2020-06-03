import { composeSum } from "../functional/composeSum";
import { calculateTotalEarliness } from "./calculateTotalEarliness";
import { calculateTotalTardiness } from "./calculateTotalTardiness";

export const calculateTotalEarlinessAndTardiness = composeSum(
  calculateTotalEarliness,
  calculateTotalTardiness
);
