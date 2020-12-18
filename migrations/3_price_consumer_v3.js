const PriceConsumerV3 = artifacts.require('PriceConsumerV3')

module.exports = async (deployer, network, [defaultAccount]) => {
    // Local (development) networks need their own deployment of the LINK
    // token and the Oracle contract
    try {
        await deployer.deploy(PriceConsumerV3, { from: defaultAccount })
    } catch (err) {
        console.error(err)
    }
}
