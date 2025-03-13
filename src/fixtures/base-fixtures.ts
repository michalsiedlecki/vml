import { mergeTests } from "@playwright/test";
import { test as basePage } from "./base-page";
import { test as baseSteps } from "./base-steps";

export const test = mergeTests(basePage, baseSteps);
export { expect } from "@playwright/test";
