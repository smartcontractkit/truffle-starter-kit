/* eslint-disable @typescript-eslint/no-var-requires 

This repo is for testing on kovan network only.
You can get truffle teams and do a forking version of
these tests.
*/

const { assert } = require('chai')

contract('PriceConsumerV3', accounts => {
    const MockPriceFeed = artifacts.require('MockV3Aggregator')
    const PriceConsumerV3 = artifacts.require('PriceConsumerV3')

    const defaultAccount = accounts[0]
    // The addresses here can be found in the chainlink docs
    // https://docs.chain.link/docs/ethereum-addresses

    let priceConsumerV3, mockPriceFeed

    describe('#getLatestPrice', () => {
        let price = "2000000000000000000"
        beforeEach(async () => {
            mockPriceFeed = await MockPriceFeed.new(8, price)
            priceConsumerV3 = await PriceConsumerV3.new(mockPriceFeed.address)
        })
        it('returns a price', async () => {
            assert.equal(await priceConsumerV3.getLatestPrice(), price)
        })
    })
})
