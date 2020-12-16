const RandomNumberConsumer = artifacts.require('RandomNumberConsumer')
const LinkTokenInterface = artifacts.require('LinkTokenInterface')

/*
  This script is meant to assist with funding the requesting
  contract with LINK. It will send 1 LINK to the requesting
  contract for ease-of-use. Any extra LINK present on the contract
  can be retrieved by calling the withdrawLink() function.
*/

const payment = process.env.TRUFFLE_CL_BOX_PAYMENT || '1000000000000000000'

module.exports = async callback => {
    try {
        const randomNumberConsumer = await RandomNumberConsumer.deployed()
        const tokenAddress = await randomNumberConsumer.getChainlinkToken()
        const token = await LinkTokenInterface.at(tokenAddress)
        console.log('Funding contract:', randomNumberConsumer.address)
        const tx = await token.transfer(randomNumberConsumer.address, payment)
        callback(tx.tx)
    } catch (err) {
        callback(err)
    }
}
