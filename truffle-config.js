/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation, and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require("@truffle/hdwallet-provider")
require("dotenv").config()

const privateKeys = [process.env.PRIVATE_KEY]
// These are the keys auto-generated from running `ganache -d`
const ganachePrivateKeys = ["0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d"]
const RINKEBY_RPC_URL =
    process.env.RINKEBY_RPC_URL || "https://eth-rinkeby.alchemyapi.io/v2/your-api-key"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
    /**
     * Networks define how you connect to your ethereum client and let you set the
     * defaults web3 uses to send transactions. If you don't specify one truffle
     * will spin up a development blockchain for you on port 9545 when you
     * run `develop` or `test`. You can ask a truffle command to use a specific
     * network from the command line, e.g
     *
     * $ truffle test --network <network-name>
     */

    networks: {
        // Useful for testing. The `development` name is special - truffle uses it by default
        // if it's defined here and no other network is specified at the command line.
        // You should run a client (like ganache, geth, or parity) in a separate terminal
        // tab if you use this network and you must also set the `host`, `port` and `network_id`
        // options below to some value.
        //
        development: {
            provider: () => new HDWalletProvider(ganachePrivateKeys, "http://127.0.0.1:8545"),
            host: "127.0.0.1", // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: "*", // Any network (default: none)
            confirmations: 0,
        },

        // Useful for deploying to a public network.
        // Note: It's important to wrap the provider as a function to ensure truffle uses a new provider every time.
        rinkeby: {
            provider: () => new HDWalletProvider(privateKeys, RINKEBY_RPC_URL),
            network_id: 4, // Rinkeby's id
            confirmations: 6, // # of confirmations to wait between deployments. (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
        },
        //
        // Useful for private networks
        // private: {
        //   provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
        //   network_id: 2111,   // This network is yours, in the cloud.
        //   production: true    // Treats this network as if it was a public net. (default: false)
        // }
    },

    // Set default mocha options here, use special reporters, etc.
    mocha: {
        timeout: 100000,
    },

    plugins: ["truffle-plugin-verify"],
    api_keys: {
        etherscan: ETHERSCAN_API_KEY,
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "pragma", // Fetch exact version from solc-bin (default: truffle's version)
            settings: {
                optimizer: {
                    enabled: false,
                    runs: 200,
                },
            },
        },
    },

    // Truffle DB is currently disabled by default; to enable it, change enabled:
    // false to enabled: true. The default storage location can also be
    // overridden by specifying the adapter settings, as shown in the commented code below.
    //
    // NOTE: It is not possible to migrate your contracts to truffle DB and you should
    // make a backup of your artifacts to a safe location before enabling this feature.
    //
    // After you backed up your artifacts you can utilize db by running migrate as follows:
    // $ truffle migrate --reset --compile-all
    //
    // db: {
    //     enabled: true,
    //     host: "127.0.0.1",
    //     adapter: {
    //         name: "sqlite",
    //         settings: {
    //             directory: ".db",
    //         },
    //     },
    // },
}
