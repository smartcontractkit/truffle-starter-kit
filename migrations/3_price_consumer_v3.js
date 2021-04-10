const PriceConsumerV3 = artifacts.require('PriceConsumerV3')
const KOVAN_ETH_USD_PRICE_FEED = '0x9326BFA02ADD2366b30bacB125260Af641031331'

module.exports = async (deployer, network, [defaultAccount]) => {
    // Local (development) networks need their own deployment of the LINK
    // token and the Oracle contract

    // currently hardcoded for Kovan
    let priceFeedAddress = KOVAN_ETH_USD_PRICE_FEED
    try {
        await deployer.deploy(PriceConsumerV3, KOVAN_ETH_USD_PRICE_FEED, { from: defaultAccount })
    } catch (err) {
        console.error(err)
    }
}
