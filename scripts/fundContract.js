const LinkToken = artifacts.require("LinkToken")
const { networkConfig } = require("../helper-truffle-config")

const payment = process.env.TRUFFLE_CL_BOX_PAYMENT || "1000000000000000000"

async function fundContractWithLink(contractAddress, network) {
    let linkToken
    if (network == "development") {
        linkToken = await LinkToken.deployed()
    } else {
        linkToken = await LinkToken.at(networkConfig[network]["linkToken"])
    }
    const tx = await linkToken.transfer(contractAddress, payment)
    console.log("Contract funded with Link")
}

module.exports = {
    fundContractWithLink,
}
