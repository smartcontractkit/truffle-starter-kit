const networkConfig = {
    test: {
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        keepersUpdateInterval: "30",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    },
    ganache: {
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        keepersUpdateInterval: "30",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    },
    goerli: {
        chainId: "5",
        linkToken: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
        keyHash: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        vrfCoordinator: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
        oracle: "0xCC79157eb46F5624204f47AB42b3906cAA40eaB7",
        jobId: "ca98366cc7314957b8c012c72f05aeeb",
        fee: "100000000000000000",
        fundAmount: "100000000000000000", // 0.1
        keepersUpdateInterval: "30",
        subId: "52", // add your subscription Id here!
    },
    goerli: {
        chainId: "5",
        linkToken: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
        keyHash: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        vrfCoordinator: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
        oracle: "0xCC79157eb46F5624204f47AB42b3906cAA40eaB7",
        jobId: "ca98366cc7314957b8c012c72f05aeeb",
        fee: "100000000000000000",
        fundAmount: "100000000000000000", // 0.1
        keepersUpdateInterval: "30",
        subId: "0", // add your subscription Id here!
    },
}

const developmentChains = ["test", "development", "ganache"]

module.exports = {
    networkConfig,
    developmentChains,
}
