// npx truffle exec scripts/fund-contract.js --network live

const { ethers } = require("ethers");
const fs = require("fs");
const MyContract = artifacts.require("MyContract");
const payment = process.env.TRUFFLE_CL_BOX_PAYMENT || "1000000000000000000";
let raw = fs.readFileSync("../abis/LinkToken.json");
const ABI = JSON.parse(raw);

module.exports = async function(callback) {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  // Hard coded for Ropsten....
  const linkAddress = "0x20fE562d797A42Dcb3399062AE9546cd06f63280";
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const linkContract = new ethers.Contract(linkAddress, ABI, wallet);
  const mc = await MyContract.deployed();
  console.log(mc.address);

  await linkContract.transfer(mc.address, payment).then(function(tx) {
    console.log(tx);
  });
  callback();
};
