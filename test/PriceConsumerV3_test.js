/* eslint-disable @typescript-eslint/no-var-requires 

This repo is for testing on a live network only.
You can get truffle teams and do a forking version of
these tests.

*/

contract('PriceConsumerV3', accounts => {
    const PriceConsumerV3 = artifacts.require('PriceConsumerV3')

    const defaultAccount = accounts[0]
    // The addresses here can be found in the chainlink docs
    // https://docs.chain.link/docs/ethereum-addresses

    let priceConsumerV3

    describe('#getLatestPrice', () => {
        it('returns a price', async () => {
            // priceConsumerV3 = await PriceConsumerV3.new()
            // const price = await priceConsumerV3.getLatestPrice()
            // assert.equal(price > 0, true)
            // assert.equal(
            //     web3.utils.padLeft(web3.utils.toHex(price), 64),
            //     web3.utils.padLeft(expected, 64),
            // )
            assert(true, true)
        })
    })
})
