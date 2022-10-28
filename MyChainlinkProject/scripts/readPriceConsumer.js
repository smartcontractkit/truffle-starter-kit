const PriceConsumerV3 = artifacts.require("PriceConsumerV3")

module.exports = async (callback) => {
    const priceConsumerV3 = await PriceConsumerV3.deployed()
    const latestPrice = await priceConsumerV3.getLatestPrice()
    console.log(`Price ${latestPrice}`)
    callback()
}
