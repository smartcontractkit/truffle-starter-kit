const { assert } = require("chai")
const PriceConsumerV3 = artifacts.require("PriceConsumerV3")
const MockV3Aggregator = artifacts.require("MockV3Aggregator")

contract("PriceConsumerV3", function (deployer, network, accounts) {
    let priceConsumerV3, mockV3Aggregator

    beforeEach(async () => {
        priceConsumerV3 = await PriceConsumerV3.deployed()
        mockV3Aggregator = await MockV3Aggregator.deployed()
    })

    it("sets the aggregator addresses correctly", async () => {
        const response = await priceConsumerV3.getPriceFeed()
        assert.equal(response, mockV3Aggregator.address)
    })

    it("should return the same value as the mock", async () => {
        const priceConsumerResult = await priceConsumerV3.getLatestPrice()
        const priceFeedResult = (await mockV3Aggregator.latestRoundData()).answer
        assert.equal(priceConsumerResult.toString(), priceFeedResult.toString())
    })
})
