const LinkToken = artifacts.require("LinkToken")
const MockOracle = artifacts.require("MockOracle")
const MockV3Aggregator = artifacts.require("MockV3Aggregator")
const VRFCoordinatorV2Mock = artifacts.require("VRFCoordinatorV2Mock")
const { developmentChains } = require("../helper-truffle-config")

const DECIMALS = "18"
const INITIAL_PRICE = "200000000000000000000"

const BASE_FEE = "100000000000000000"
const GAS_PRICE_LINK = "1000000000" // 0.000000001 LINK per gas

module.exports = async function (deployer, network) {
    if (developmentChains.includes(network)) {
        console.log("Deploying Mocks...")
        await deployer.deploy(LinkToken)
        const linkToken = await LinkToken.deployed()
        await deployer.deploy(MockV3Aggregator, DECIMALS, INITIAL_PRICE)
        await deployer.deploy(VRFCoordinatorV2Mock, BASE_FEE, GAS_PRICE_LINK)
        await deployer.deploy(MockOracle, linkToken.address)
        console.log("Mocks Deployed!")
    } else {
        console.log("Skipping Mocks Deployment...")
    }
}
