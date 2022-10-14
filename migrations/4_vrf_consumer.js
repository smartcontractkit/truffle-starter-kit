const VRFCoordinatorV2Mock = artifacts.require("VRFCoordinatorV2Mock")
const RandomNumberConsumerV2 = artifacts.require("RandomNumberConsumerV2")

const { networkConfig, developmentChains } = require("../helper-truffle-config")

module.exports = async function (deployer, network, accounts) {
    let vrfCoordinatorAddress, subscriptionId

    if (developmentChains.includes(network)) {
        const vrfCoordinatorV2Mock = await VRFCoordinatorV2Mock.deployed()
        vrfCoordinatorAddress = vrfCoordinatorV2Mock.address

        const fundAmount = networkConfig[network]["fundAmount"]
        const transaction = await vrfCoordinatorV2Mock.createSubscription()
        subscriptionId = transaction.logs[0].args["subId"]
        await vrfCoordinatorV2Mock.fundSubscription(subscriptionId, fundAmount)
    } else {
        subscriptionId = networkConfig[network]["subId"]
        vrfCoordinatorAddress = networkConfig[network]["vrfCoordinator"]
    }
    const keyHash = networkConfig[network]["keyHash"]

    await deployer.deploy(RandomNumberConsumerV2, subscriptionId, vrfCoordinatorAddress, keyHash)
    console.log("RandomNumberConsumerV2 Consumer Deployed!")
}
