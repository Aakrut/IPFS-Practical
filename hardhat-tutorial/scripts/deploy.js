const { ethers } = require("hardhat");

async function main() {
  const metadataURL = "ipfs://QmQBHarz2WFczTjz5GnhjHrbUPDnB48W5BM2v2h6HbE1rZ";

  const lw3PunksContract = await ethers.getContractFactory("LW3Punks");

  const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);

  await deployedLW3PunksContract.deployed();

  console.log(`LW3Punks Contract Address: ${deployedLW3PunksContract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
