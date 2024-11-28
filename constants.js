const constants = {
    networks: {
      mainnet: {
        suffix: "",
        subdomain: "mainnet"
      },
      base: {
        suffix: "base:",
        subdomain: "base-mainnet"
      },
      goerli: {
        suffix: "goerli:",
        subdomain: "goerli"
      },
      sepolia: {
        suffix: "sepolia:",
        subdomain: "sepolia"
      },
      polygon: {
        suffix: "poly:",
        subdomain: "polygon-mainnet"
      },
      polygon_testnet: {
        suffix: "mumbai:",
        subdomain: "polygon-mumbai"
      },
      arbitrum: {
        suffix: "arbi:",
        subdomain: "arbitrum-mainnet"
      },
      arbitrum_testnet: {
        suffix: "testnet.arbi:",
        subdomain: "arbitrum-goerli"
      },
      avalanche: {
        suffix: "avax:",
        subdomain: "avalanche-mainnet"
      },
      avalanche_testnet: {
        suffix: "testnet.avax:",
        subdomain: "avalanche-fuji"
      },
      optimism: {
        suffix: "optim:",
        subdomain: "optimism-mainnet"
      },
    }
  };

  module.exports = {
    ...constants
  };
