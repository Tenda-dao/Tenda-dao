// Import ethers from Hardhat
import { ethers } from "hardhat";

/**
 * The function to deploy TENDA contract
 * @returns The address of the deployed TENDA contract.
 */
export async function deployTENDA(): Promise<string | undefined> {
  try {
    // Get contract factory
    const TENDA = await ethers.getContractFactory("tenda");

    // Deploy contract
    console.log("Deploying TENDA contract...");
    const tenda = await TENDA.deploy();

    // Wait for deployment to finish
    await tenda.deployed();

    // Call initialize function (if it exists)
    if (typeof tenda.initialize === 'function') {
      console.log("Initializing TENDA contract...");
      await tenda.initialize();
    }

    // Log deployed address
    console.log("TENDA deployed to:", tenda.address);

    return tenda.address;
  } catch (error) {
    console.error("Failed to deploy TENDA:", error);
  }
  return undefined;
}
