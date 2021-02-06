const RandomNumberConsumer = artifacts.require('RandomNumberConsumer')
const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')

module.exports = async (deployer, network, [defaultAccount]) => {
    // Local (development) networks need their own deployment of the LINK
    // token and the Oracle contract
    if (!network.startsWith('kovan')) {
        LinkToken.setProvider(deployer.provider)
        try {
            await deployer.deploy(LinkToken, { from: defaultAccount })
            await deployer.deploy(RandomNumberConsumer, LinkToken.address)
        } catch (err) {
            console.error(err)
        }
    } else {
        // For now, this is hard coded to Kovan
        deployer.deploy(RandomNumberConsumer, '0xa36085F69e2889c224210F603D836748e7dC0088')
    }
}
