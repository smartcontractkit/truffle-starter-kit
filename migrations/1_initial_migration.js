const Migrations = artifacts.require("Migrations")

module.exports = async function (deployer, network) {
    if (network == "development") {
        await deployer.deploy(Migrations)
    }
}
