const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  networks: {
    cldev: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    live: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL)
      },
      network_id: '*',
      // ~~Necessary due to https://github.com/trufflesuite/truffle/issues/1971~~
      // Necessary due to https://github.com/trufflesuite/truffle/issues/3008
      skipDryRun: true,
    },
    // TODO
    // Setup a local ganache chain through the CLI
    // so we can fork mainnet for testing
    // test: {
    //   // provider: () => {
    //   //   return new HDWalletProvider(process.env.MNEMONIC,
    //   //     "http://127.0.0.1:8545")
    //   // },
    //   // host: "127.0.0.1",
    //   // port: 8545,
    //   // skipDryRun: true,
    //   skipDryRun: true,
    //   network_id: '*',
    //   fork: process.env.RPC_URL
    // }
  },
  compilers: {
    solc: {
      version: '0.6.6',
    },
  },
}
