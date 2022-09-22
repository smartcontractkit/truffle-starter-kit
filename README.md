<br/>
<p align="center">
<a href="https://chain.link" target="_blank">
<img src="./box-img-lg.png" width="225" alt="Chainlink Truffle logo">
</a>
</p>
<br/>

> For an up to date javascript framework, be sure to check out the [hardhat-starter-kit](https://github.com/smartcontractkit/hardhat-starter-kit) 

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/smartcontractkit/truffle-starter-kit)

- [Chainlink Truffle Starter Kit](#chainlink-truffle-starter-kit)
- [Getting Started](#getting-started)
- [It's recommended that you've gone through the Truffle getting started documentation before proceeding here.](#its-recommended-that-youve-gone-through-the-truffle-getting-started-documentation-before-proceeding-here)
  - [Requirements](#requirements)
  - [Quickstart](#quickstart)
- [Usage](#usage)
  - [Deploying Contracts](#deploying-contracts)
  - [Run a Local Network](#run-a-local-network)
  - [Using a Testnet or Live Network (like Mainnet or Polygon)](#using-a-testnet-or-live-network-like-mainnet-or-polygon)
    - [Goerli Ethereum Testnet Setup](#goerli-ethereum-testnet-setup)
- [Test](#test)
- [Interacting with Deployed Contracts](#interacting-with-deployed-contracts)
  - [Chainlink Price Feeds](#chainlink-price-feeds)
  - [Request & Receive Data](#request--receive-data)
  - [VRF Get a random number](#vrf-get-a-random-number)
  - [Keepers](#keepers)
  - [Verify on Etherscan](#verify-on-etherscan)
- [Contributing](#contributing)
- [Thank You!](#thank-you)
  - [Resources](#resources)

# Chainlink Truffle Starter Kit
 Implementation of the following 4 Chainlink features using the [Truffle](https://trufflesuite.com/) development environment:
 - [Chainlink Price Feeds](https://docs.chain.link/docs/using-chainlink-reference-contracts)
 - [Chainlink VRF](https://docs.chain.link/docs/chainlink-vrf)
 - [Chainlink Keepers](https://docs.chain.link/docs/chainlink-keepers/introduction/)
 - [Request & Receive data](https://docs.chain.link/docs/request-and-receive-data)

# Getting Started 

It's recommended that you've gone through the [Truffle getting started documentation](https://trufflesuite.com/docs/truffle/getting-started/compiling-contracts/) before proceeding here. 
=======
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/smartcontractkit/truffle-starter-kit)


## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version`and get an ouput like: `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` And get an output like: `x.x.x`
    - You might need to install it with npm

> If you're familiar with `npx` and `npm` instead of `yarn`, you can use `npx` for execution and `npm` for installing dependencies. 

## Quickstart

1. Clone and install dependencies

After installing all the requirements, run the following:

```bash
git clone https://github.com/smartcontractkit/truffle-starter-kit/
cd truffle-starter-kit
```
Then:
```
yarn
```

or
```
npm i
```

2. You can now do stuff!

```
yarn truffle test
```

or

```
npm test
```

# Usage

If you run `yarn Truffle --help` you'll get an output of all the tasks you can run. 

## Deploying Contracts

```
yarn truffle deploy --network <NETWORK>
```

This will deploy your contracts to the network you specify. Additionally, if you are on a local network, it will deploy mock Chainlink contracts for you to interact with. If you'd like to interact with your deployed contracts, skip down to [Interacting with Deployed Contracts](#interacting-with-deployed-contracts).

## Run a Local Network

One of the best ways to test and interact with smart contracts is with a local network. To run a local network with all your contracts in it, run the following:

```
yarn chain
```

You'll get a local blockchain, private keys, contracts deployed (from the `deploy` folder scripts), and an endpoint to potentially add to an EVM wallet. 

In a new terminal, you can then deploy using:

```
yarn truffle deploy --network ganache
```


## Using a Testnet or Live Network (like Mainnet or Polygon)

In your `truffle-config.js` you'll see section like:

```
  networks: {
```

This section of the file is where you define which networks you want to interact with. You can read more about that whole file in the [Truffle documentation.](https://trufflesuite.com//config/)

To interact with a live or test network, you'll need:

1. An rpc URL 
2. A Private Key
3. ETH & LINK token (either testnet or real)

Let's look at an example of setting these up using the Goerli testnet. 

### Goerli Ethereum Testnet Setup

First, we will need to set environment variables. We can do so by setting them in our `.env` file (create it if it's not there). You can also read more about [environment variables](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html) from the linked twilio blog. You'll find a sample of what this file will look like in `.env.example`

> IMPORTANT: MAKE SURE YOU'D DONT EXPOSE THE KEYS YOU PUT IN THIS `.env` FILE. By that, I mean don't push them to a public repo, and please try to keep them keys you use in development not associated with any real funds. 

1. Set your `GOERLI_RPC_URL` [environment variable.](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html)

You can get one for free from [Alchmey](https://www.alchemy.com/), [Infura](https://infura.io/), or [Moralis](https://moralis.io/speedy-nodes/). This is your connection to the blockchain. 

2. Set your `PRIVATE_KEY` environment variable. 

This is your private key from your wallet, ie [MetaMask](https://metamask.io/). This is needed for deploying contracts to public networks. 

![WARNING](https://via.placeholder.com/15/f03c15/000000?text=+) **WARNING** ![WARNING](https://via.placeholder.com/15/f03c15/000000?text=+)

When developing, it's best practice to use a Metamask that isn't associated with any real money. A good way to do this is to make a new browser profile (on Chrome, Brave, Firefox, etc) and install Metamask on that brower, and never send this wallet money.  

Don't commit and push any changes to .env files that may contain sensitive information, such as a private key! If this information reaches a public GitHub repository, someone can use it to check if you have any Mainnet funds in that wallet address, and steal them!

`.env` example:
```
GOERLI_RPC_URL='www.infura.io/asdfadsfafdadf'
PRIVATE_KEY='abcdef'
```
`bash` example
```
export GOERLI_RPC_URL='www.infura.io/asdfadsfafdadf'
export PRIVATE_KEY='abcdef'
```

For other networks like mainnet and polygon, you can use different environment variables for your RPC URL and your private key. See the `truffle-config.js` to learn more. 

1. Get some Goerli Testnet ETH and LINK 

Head over to the [Chainlink faucets](https://faucets.chain.link/) and get some ETH and LINK. Please follow [the chainlink documentation](https://docs.chain.link/docs/acquire-link/) if unfamiliar. 

4. Create VRF V2 subscription

Head over to [VRF Subscription Page](https://vrf.chain.link/goerli) and create the new subscription. Save your subscription ID and place it in your `helper-truffle-config.js` under `subId`. 

5. Running commands

You should now be all setup! You can run any command and just pass the `--network goerli` now!

To deploy contracts:

```
yarn truffle deploy --network goerli
```



# Test
Tests are located in the [test](./test/) directory, and are split between unit tests and staging/testnet tests. Unit tests should only be run on local environments, and staging tests should only run on live environments.

To run unit tests:

```bash
yarn test
```
or
```
yarn truffle test
```

# Interacting with Deployed Contracts

After deploying your contracts, the deployment output will give you the contract addresses as they are deployed. You can then use these contract addresses in conjunction with Truffle tasks to perform operations on each contract.


## Chainlink Price Feeds
The Price Feeds consumer contract has one script, to read the latest price of a specified price feed contract. 

You can deploy just the price feed consumer with:

```
truffle deploy --f 3 --to 3 --network <NETWORK>
```

After deployment, run the following:

```bash
yarn truffle exec scripts/readPriceConsumer.js --network <NETWORK>
```

## Request & Receive Data

The API Consumer contract has one script, to request data from the API and wait for a response. 

You can deploy just the API Consumer with:

```
truffle deploy --f 4 --to 4 --network <NETWORK>
```

After deployment, run the following:

```bash
yarn truffle exec scripts/requestAndReadAPI.js --network <NETWORK>
```


## VRF Get a random number

The VRF Consumer contract has one script, to request a random number and wait for a response. 

You can deploy just the VRF Consumer with:

```
truffle deploy --f 5 --to 5 --network <NETWORK>
```

After deployment, you'll need to add your contract address to your subscription. Head over to [vrf.chain.link](https://vrf.chain.link/goerli/new) and add your consumer. 

Then, run the following:

```bash
yarn truffle exec scripts/requestAndReadRandomNumber.js --network <NETWORK>
```

## Keepers

The Keepers Consumer contract has one script, to check the upkeep. After deployment, run the following:

```bash
yarn truffle exec scripts/checkUpkeep.js --network <NETWORK>
```

To see everything in action, you'll want to set up a consumer at [keepers.chain.link](https://keepers.chain.link/goerli).

## Verify on Etherscan

You'll need an `ETHERSCAN_API_KEY` environment variable. You can get one from the [Etherscan API site.](https://etherscan.io/apis). If you have it set, your deploy script will try to verify them by default, but if you want to verify any manually, you can run: 

```
yarn truffle run verify <CONTRACT> --network <NETWORK>
```
example:

```
yarn truffle run verify PriceConsumerV3 --network goerli
```


# Contributing

Contributions are always welcome! Open a PR or an issue!

# Thank You!

## Resources

- [Chainlink Documentation](https://docs.chain.link/)
- [Truffle Documentation](https://trufflesuite.com/)
