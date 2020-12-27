const MyContract = artifacts.require('MyContract')
const LinkTokenInterface = artifacts.require('LinkTokenInterface')

/*
  This script is meant to assist with funding the requesting
  contract with LINK. It will send 1 LINK to the requesting
  contract for ease-of-use. Any extra LINK present on the contract
  can be retrieved by calling the withdrawLink() function.
*/

//const payment = process.env.TRUFFLE_CL_BOX_PAYMENT || '1000000000000000000'
const payment = process.env.TRUFFLE_CL_BOX_PAYMENT || '10'

module.exports = async callback => {
  try {
    const mc = '0x162f637509672A6bD993D63c1a21F8d310971505' // your address
    const tokenAddress = '0x761429d8887600dacE56BfA13651C018C1F0C538' //address of the deploy MyContract
    const token = await LinkTokenInterface.at(tokenAddress)
    console.log('Funding contract:', mc)
    const tx = await token.transfer(mc, payment)
    callback(tx.tx)
  } catch (err) {
    callback(err)
  }
}
