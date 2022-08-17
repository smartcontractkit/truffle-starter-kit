const RandomNumberConsumerV2 = artifacts.require("RandomNumberConsumerV2")

module.exports = async (callback) => {
    const randomNumberConsumerV2 = await RandomNumberConsumerV2.deployed()
    console.log(`Requesting Random Number on contract: ${randomNumberConsumerV2.address}`)

    console.log("Sending TX...")
    const requestTx = await randomNumberConsumerV2.requestRandomWords()
    console.log(`Sent request with transaction hash: ${requestTx.tx}`)
    console.log("Listening for random Number... Please wait...")

    let randomNumber = (await randomNumberConsumerV2.s_randomWords(0)).toString()
    while (randomNumber == "0") {
        // Javascript version of sleep
        console.log("Sleeping for another 5 seconds...")
        await new Promise((r) => setTimeout(r, 5000))
        randomNumber = (await randomNumberConsumerV2.s_randomWords(0)).toString()
    }
    console.log(`Randomness: ${randomNumber}`)
    callback()
}
