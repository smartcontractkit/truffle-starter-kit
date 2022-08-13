const { assert } = require("chai")
const KeepersConsumer = artifacts.require("KeepersConsumer")
const web3 = require("web3")
const truffleAssert = require("truffle-assertions")

contract("KeepersConsumer", function () {
    let keepersConsumer
    beforeEach(async () => {
        keepersConsumer = await KeepersConsumer.deployed()
    })

    it("should be able to call checkUpkeep", async () => {
        const checkData = web3.utils.toHex("")
        const { upkeepNeeded } = await keepersConsumer.checkUpkeep(checkData)
        // const response = await keepersConsumer.checkUpkeep(checkData)
        assert.equal(upkeepNeeded, false)
    })

    it("should not be able to call perform upkeep without the time passed interval", async () => {
        const checkData = web3.utils.toHex("")
        await truffleAssert.reverts(
            keepersConsumer.performUpkeep(checkData),
            "Time interval not met"
        )
    })

    // TODO add test using evm_increaseTime and evm_mine
})
