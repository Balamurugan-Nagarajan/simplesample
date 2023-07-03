const hre = require("hardhat");
const ethers = require("ethers");

async function main() {
  const TestToken = await hre.ethers.getContractFactory("TestToken");
  const testToken = await TestToken.deploy(100000000, 50);

  await testToken.deployed();

  console.log("testToken Token deployed: ", testToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});