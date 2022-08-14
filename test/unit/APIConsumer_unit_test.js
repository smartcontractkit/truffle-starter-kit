const { expect } = require("chai")
const MockOracle = artifacts.require("MockOracle")
const APIConsumer = artifacts.require("APIConsumer")
const LinkToken = artifacts.require("LinkToken")
const { fundContractWithLink } = require("../../scripts/utils/fundContract")

contract("APIConsumer", function (deployer, network, accounts) {
    let apiConsumer, mockOracle, linkToken

    beforeEach(async () => {
        apiConsumer = await APIConsumer.deployed()
        mockOracle = await MockOracle.deployed()
        linkToken = await LinkToken.deployed()

        network = network ? network : "development"
        await fundContractWithLink(apiConsumer.address, network)
    })

    it("Should successfully make an API request", async () => {
        const transaction = await apiConsumer.requestVolumeData()
        const requestId = transaction.logs[0].args["requestId"]
        console.log("requestId: ", requestId)
        expect(requestId).to.not.be.null
    })
})
