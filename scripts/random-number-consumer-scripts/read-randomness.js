const RandomNumberConsumer = artifacts.require('RandomNumberConsumer')

/*
  This script makes it easy to read the data variable
  of the requesting contract.
*/

module.exports = async callback => {
    const randomNumberConsumer = await RandomNumberConsumer.deployed()
    const randomResult = await randomNumberConsumer.randomResult.call()
    callback(randomResult)
}
