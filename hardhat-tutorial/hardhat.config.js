require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
  },
};
