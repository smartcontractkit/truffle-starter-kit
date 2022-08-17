const KeepersConsumer = artifacts.require("KeepersConsumer")
const { networkConfig } = require("../helper-truffle-config")

module.exports = async function (deployer, network) {
    const keepersUpdateInterval = networkConfig[network]["keepersUpdateInterval"] || "30"

    await deployer.deploy(KeepersConsumer, keepersUpdateInterval)
    console.log("Keepers Consumer Deployed!")
}
