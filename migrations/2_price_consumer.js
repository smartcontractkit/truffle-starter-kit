const PriceConsumerV3 = artifacts.require("PriceConsumerV3")
const MockV3Aggregator = artifacts.require("MockV3Aggregator")

const { networkConfig, developmentChains } = require("../helper-truffle-config")

module.exports = async function (deployer, network, accounts) {
    let ethUsdPriceFeedAddress

    if (developmentChains.includes(network)) {
        const ethUsdAggregator = await MockV3Aggregator.deployed()
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[network]["ethUsdPriceFeed"]
    }

    await deployer.deploy(PriceConsumerV3, ethUsdPriceFeedAddress)
    const priceConsumerV3 = await PriceConsumerV3.deployed()
    console.log("Price Consumer Deployed!")
}
