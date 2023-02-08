<br/>
<p align="center">
<a href="https://chain.link" target="_blank">
<img src="./box-img-lg.png" width="225" alt="Chainlink Truffle logo">
</a>
</p>
<br/>

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
    - [Sepolia Ethereum Testnet Setup](#sepolia-ethereum-testnet-setup)
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

Run `truffle test`

This will run your JavaScript, TypeScript, and Solidity tests underneath the `./test` folder. If the `development` network is not specified in your `truffle-config`, `truffle test` will automatically bring up and tear down a local network on `localhost:8545`.

# Usage

If you run `truffle --help` you'll get an output of all the tasks you can run.

## Deploying Contracts

In your `truffle-config.js` you'll see section like:

```
  networks: {
```

This section of the file is where you define which networks you want to interact with. You can read more about that whole file in the [Truffle documentation.](https://trufflesuite.com//config/). To deploy a contract, you would call:

```
truffle migrate --network <NETWORK>
```

This will deploy your contracts to the network you specify. If you do not specify `network`, by default `truffle migrate` will deploy to the `development` network if it is defined in your `truffle-config`.

If you'd like to interact with your deployed contracts, skip down to [Interacting with Deployed Contracts](#interacting-with-deployed-contracts).

## Run a Local Network

One of the best ways to test and interact with smart contracts is with a local network. To start a local network with all your contracts in it, run the following:

```
ganache -d
```

This will start `ganache`, a local blockchain with private keys, pre-funded wallets, and an endpoint to potentially add to an EVM wallet. `-d` specifies a deterministic wallet. You can see all other ways you can configure Ganache [here](https://github.com/trufflesuite/ganache).

In our `truffle-config`, we've defined the local `ganache` network. To migrate, simply call:

```
truffle migrate --network ganache
```

## Using a Testnet or Live Network (like Mainnet or Polygon)

To interact with a live or test network, you will need ETH and LINK token by following these steps:

1. Get some Sepolia Testnet ETH and LINK 

Head over to the [Chainlink faucets](https://faucets.chain.link/) and get some ETH and LINK. Please follow [the chainlink documentation](https://docs.chain.link/docs/acquire-link/) if unfamiliar. 

4. Create VRF V2 subscription

Head over to [VRF Subscription Page](https://vrf.chain.link/sepolia) and create the new subscription. Save your subscription ID and place it in your `helper-truffle-config.js` under `subId`.

### Truffle Dashboard

This is our recommended way of deploying your contracts. With [Truffle dashboard](https://trufflesuite.com/docs/truffle/getting-started/using-the-truffle-dashboard/), you can deploy contracts and sign transactions through MetaMask - so you never exposing your private key! To do so, run:

`truffle dashboard`

This should bring up the dashboard on `localhost:24012`, where you can connect your wallet to the network of your choice. Note that if you want to deploy to a testnet or mainnet, you'll need ETH to pay the gas fees. Then, if you want to migrate your contracts, simply call:

`truffle migrate --network dashboard`

You should then see prompts to sign the transactions on the dashboard view. Check out this video on how to use it with Truffle and HardHat [here](https://youtu.be/AnprU4z-q0k).

### Environment configuration

In some cases, you might want your transactions to be automatically signed. In which case, you will need to provide your wallet's private key

1. An RPC URL
2. A private key
3. ETH & LINK token (either testnet or real)

Let's look at an example of setting these up using the Sepolia testnet. 

### Sepolia Ethereum Testnet Setup

First, we will need to set environment variables. We can do so by setting them in our `.env` file (create it if it's not there). You can also read more about [environment variables](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html) from the linked twilio blog. You'll find a sample of what this file will look like in `.env.example`

> IMPORTANT: MAKE SURE YOU'D DONT EXPOSE THE KEYS YOU PUT IN THIS `.env` FILE. By that, I mean don't push them to a public repo, and please try to keep them keys you use in development not associated with any real funds. 

1. Set your `SEPOLIA_RPC_URL` [environment variable.](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html)

You can get one for free from [Infura](https://infura.io/), [Alchemy](https://www.alchemy.com/), or [Moralis](https://moralis.io/speedy-nodes/). This is your connection to the blockchain.

2. Set your `PRIVATE_KEY` environment variable. 

This is your private key from your wallet, ie [MetaMask](https://metamask.io/). This is needed for deploying contracts to public networks. 

![WARNING](https://via.placeholder.com/15/f03c15/000000?text=+) **WARNING** ![WARNING](https://via.placeholder.com/15/f03c15/000000?text=+)

When developing, it's best practice to use a Metamask that isn't associated with any real money. A good way to do this is to use Truffle Dashboard. Alternatively, make a new browser profile (on Chrome, Brave, Firefox, etc) and install Metamask on that brower, and never send this wallet money.  

Don't commit and push any changes to .env files that may contain sensitive information, such as a private key! If this information reaches a public GitHub repository, someone can use it to check if you have any Mainnet funds in that wallet address, and steal them!

`.env` example:
```
SEPOLIA_RPC_URL='https://sepolia.infura.io/v3/asdfasdfasdfasdf'
PRIVATE_KEY='abcdef'
```
`bash` example
```
export SEPOLIA_RPC_URL='https://sepolia.infura.io/v3/asdfasdfasdfasdf'
export PRIVATE_KEY='abcdef'
```

For other networks like mainnet and polygon, you can use different environment variables for your RPC URL and your private key. See the `truffle-config.js` to learn more. 

Uncomment the `sepolia` network in your `truffle-config`. You should now be all setup! You can run any command and just pass the `--network sepolia` now!

To deploy all contracts:

```
truffle migrate --network sepolia
```

# Test

Tests are located in the [test](./test/) directory, and are split between unit tests and staging/testnet tests. Unit tests should only be run on local environments, and staging tests should only run on live environments.

To run unit tests:

```bash
truffle test
```

# Interacting with Deployed Contracts

After deploying your contracts, the deployment output will give you the contract addresses as they are deployed. You can then use these contract addresses in conjunction with Truffle scripts to perform operations on each contract. Alternatively, if you want to interact with contracts on the fly, you can read about how to use `truffle console` or `truffle develop` [here](https://trufflesuite.com/docs/truffle/getting-started/using-truffle-develop-and-the-console/).

## Chainlink Price Feeds

The Price Feeds consumer contract has one script, to read the latest price of a specified price feed contract. 

You can deploy just the price feed consumer with:

```bash
truffle migrate --f 3 --to 3 --network <NETWORK>
```

After deployment, run the following:

```bash
truffle exec scripts/readPriceConsumer.js --network <NETWORK>
```

## Request & Receive Data

The API Consumer contract has one script, to request data from the API and wait for a response. 

You can deploy just the API Consumer with:

```
truffle migrate --f 4 --to 4 --network <NETWORK>
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

After deployment, you'll need to add your contract address to your subscription. Head over to [vrf.chain.link](https://vrf.chain.link/sepolia/new) and add your consumer. 

Then, run the following:

```bash
truffle exec scripts/requestAndReadRandomNumber.js --network <NETWORK>
```

## Keepers

The Keepers Consumer contract has one script, to check the upkeep. After deployment, run the following:

```bash
truffle exec scripts/checkUpkeep.js --network <NETWORK>
```

To see everything in action, you'll want to set up a consumer at [keepers.chain.link](https://keepers.chain.link/sepolia).

## Verify on Etherscan

You'll need an `ETHERSCAN_API_KEY` environment variable. You can get one from the [Etherscan API site.](https://etherscan.io/apis). If you have it set, your deploy script will try to verify them by default, but if you want to verify any manually, you can run: 

```
truffle run verify <CONTRACT> --network <NETWORK>
```
example:

```
truffle run verify PriceConsumerV3 --network sepolia
```

# Contributing

Contributions are always welcome! Open a PR or an issue!

# Thank You!

## Resources

- [Chainlink Documentation](https://docs.chain.link/)
- [Truffle Documentation](https://trufflesuite.com/)
