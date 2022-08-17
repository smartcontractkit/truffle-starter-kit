const APIConsumer = artifacts.require("APIConsumer")

module.exports = async (callback) => {
    const apiConsumer = await APIConsumer.deployed()
    console.log(`Requesting API Response on contract ${apiConsumer.address}`)
    const requestTx = await apiConsumer.requestVolumeData()
    console.log(`Sent request with transaction hash: ${requestTx.tx}`)
    console.log("Listening for response... Please wait...")
    // We get into a little bit of a race condition here...
    let volume = (await apiConsumer.volume()).toString()
    while (volume == "0") {
        // Javascript version of sleep
        console.log("Sleeping for another 5 seconds...")
        await new Promise((r) => setTimeout(r, 5000))
        volume = (await apiConsumer.volume()).toString()
    }
    callback()
}
