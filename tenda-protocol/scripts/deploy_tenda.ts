//import { ethers, upgrades } from "hardhat";
import { ethers }  from "hardhat";

/**
 * The function to deploy TENDA contract
 * @returns The address of the deployed TENDA contract.
 */
export async function deployTENDA(): Promise<string> {

  const TENDA = await ethers.getContractFactory("tenda");
  const tenda = await TENDA.deploy();

  const signers = await ethers.getSigners();

  await tenda.deployed();
  await tenda.initialize();
  return tenda.address;
}
