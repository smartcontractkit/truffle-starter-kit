const { assert } = require("chai")
const VRFCoordinatorV2Mock = artifacts.require("VRFCoordinatorV2Mock")
const RandomNumberConsumerV2 = artifacts.require("RandomNumberConsumerV2")

contract("RandomNumberConsumerV2", function (deployer, network, accounts) {
    let vrfCoordinatorV2Mock, randomNumberConsumerV2, subId

    beforeEach(async () => {
        randomNumberConsumerV2 = await RandomNumberConsumerV2.deployed()
        vrfCoordinatorV2Mock = await VRFCoordinatorV2Mock.deployed()
        subId = await randomNumberConsumerV2.getSubscriptionId()
        await vrfCoordinatorV2Mock.addConsumer(subId, randomNumberConsumerV2.address)
    })

    it("Should successfully make an Random Number request", async () => {
        await randomNumberConsumerV2.requestRandomWords()
        const requestId = await randomNumberConsumerV2.s_requestId()
        expect(requestId).to.not.be.null
    })
})
