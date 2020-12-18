const RandomNumberConsumer = artifacts.require('RandomNumberConsumer')

/*
  This script allows for a Chainlink request for a 
  random number with the Chainlink VRF. Docs can be found
  here: https://docs.chain.link/docs/get-a-random-number
*/


module.exports = async callback => {
  const USER_PROVIDED_SEED = process.env.RANDOM_SEED || 1
  const randomNumberConsumer = await RandomNumberConsumer.deployed()
  console.log('Requesting a random number from: ', randomNumberConsumer.address)
  const tx = await randomNumberConsumer.getRandomNumber(USER_PROVIDED_SEED)
  callback(tx.tx)
}
