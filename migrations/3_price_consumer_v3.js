const PriceConsumerV3 = artifacts.require('PriceConsumerV3')

module.exports = async (deployer, network, [defaultAccount]) => {
    // Local (development) networks need their own deployment of the LINK
    // token and the Oracle contract
    if (!network.startsWith('live')) {
        try {
            await deployer.deploy(MyContract, { from: defaultAccount })
        } catch (err) {
            console.error(err)
        }
    } else {
        // For live networks, use the 0 address to allow the ChainlinkRegistry
        // contract automatically retrieve the correct address for you
        deployer.deploy(PriceConsumerV3, { from: defaultAccount })
    }
}
