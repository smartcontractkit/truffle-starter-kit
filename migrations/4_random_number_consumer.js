const RandomNumberConsumer = artifacts.require('RandomNumberConsumer')
const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')

module.exports = async (deployer, network, [defaultAccount]) => {
    // Local (development) networks need their own deployment of the LINK
    // token and the Oracle contract
    if (!network.startsWith('live')) {
        LinkToken.setProvider(deployer.provider)
        try {
            await deployer.deploy(LinkToken, { from: defaultAccount })
            await deployer.deploy(RandomNumberConsumer, LinkToken.address)
        } catch (err) {
            console.error(err)
        }
    } else {
        // For live networks, use the 0 address to allow the ChainlinkRegistry
        // contract automatically retrieve the correct address for you
        deployer.deploy(MyContract, '0x0000000000000000000000000000000000000000')
    }
}
