const { assert } = require("chai")
const VRFCoordinatorV2Mock = artifacts.require("VRFCoordinatorV2Mock")
const RandomNumberConsumerV2 = artifacts.require("RandomNumberConsumerV2")

contract("RandomNumberConsumerV2", function (deployer, network, accounts) {
    let vrfCoordinatorV2Mock, randomNumberConsumerV2

    beforeEach(async () => {
        randomNumberConsumerV2 = await RandomNumberConsumerV2.deployed()
        vrfCoordinatorV2Mock = await VRFCoordinatorV2Mock.deployed()

        const subscriptionId = await randomNumberConsumerV2.s_subscriptionId()
        const fundAmount = "100000000000000000"
        await vrfCoordinatorV2Mock.fundSubscription(subscriptionId, fundAmount)
    })

    // TODO
})
