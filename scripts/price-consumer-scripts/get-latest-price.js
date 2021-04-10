const PriceConsumerV3 = artifacts.require('PriceConsumerV3')

/*
  This script makes it easy to read the data on
  the price feed deployed contract
*/

module.exports = async callback => {
  const priceConsumerV3 = await PriceConsumerV3.deployed()
  const latestPrice = await priceConsumerV3.getLatestPrice()
  callback(latestPrice)
}
