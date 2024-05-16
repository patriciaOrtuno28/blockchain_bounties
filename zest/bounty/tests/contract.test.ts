import { describe, expect, it } from "vitest";
import { Cl } from '@stacks/transactions';

const accounts = simnet.getAccounts();
const deployer = accounts.get('deployer')!;
// const address1 = accounts.get("wallet_1")!;

describe("math-v1-2 contract tests", () => {
  it("ensures simnet is well initalise", () => {
    expect(simnet.blockHeight).toBe(0);
  });

  it('should return the max value', () => {
    const response = simnet.callReadOnlyFn('math-v1-2', 'get-max-value', [], deployer);
    console.log(Cl.prettyPrint(response.result)); // (ok u340282366920938463463374607431768211455)
    expect(response.result).toBeUint(340282366920938463463374607431768211455n);
  });

  it('should correctly multiply two numbers', () => {
    const response = simnet.callReadOnlyFn('math-v1-2', 'mul', [Cl.uint(2), Cl.uint(3)], deployer);
    console.log(Cl.prettyPrint(response.result)); // (ok u6)
    expect(response.result).toBeUint(6);
  });
});
