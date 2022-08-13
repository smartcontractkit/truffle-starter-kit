const networkConfig = {
    development: {
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        keepersUpdateInterval: "30",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    },
    rinkeby: {
        chainId: "4",
        linkToken: "0x01be23585060835e02b77ef475b0cc51aa1e0709",
        ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        vrfCoordinator: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
        oracle: "0xc57b33452b4f7bb189bb5afae9cc4aba1f7a4fd8",
        jobId: "6b88e0402e5d415eb946e528b8e0c7ba",
        fee: "100000000000000000",
        fundAmount: "100000000000000000", // 0.1
        keepersUpdateInterval: "30",
        subId: "0", // add your subscription Id here!
    },
}

module.exports = {
    networkConfig,
}
