require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://polygon-mumbai.g.alchemy.com/v2/7zNpSwfaOC6XqkamL9_UX_zxA_cURtbC";
const NEXT_PUBLIC_PRIVATE_KEY = "b1ea4b57668c935d28dbdd8a1147707dda3467bfce0b34053bb90791aa87fa27";

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
