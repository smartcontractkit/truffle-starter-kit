/* eslint-disable @typescript-eslint/no-var-requires */
const { expectRevert } = require('@openzeppelin/test-helpers')
const { assert } = require('chai')

contract('RandomNumberConsumer', accounts => {
    const RandomNumberConsumer = artifacts.require('RandomNumberConsumer')
    const VRFCoordinatorMock = artifacts.require('VRFCoordinatorMock')
    const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')
    const defaultAccount = accounts[0]
    let randomNumberConsumer, vrfCoordinatorMock, seed, link, keyhash, fee

    describe('#request random number', () => {
        beforeEach(async () => {
            keyhash = '0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4'
            fee = '1000000000000000000'
            link = await LinkToken.new({ from: defaultAccount })
            vrfCoordinatorMock = await VRFCoordinatorMock.new(link.address, { from: defaultAccount })
            randomNumberConsumer = await RandomNumberConsumer.new(link.address, keyhash, vrfCoordinatorMock.address, fee, { from: defaultAccount })
            seed = 1
        })
        it('reverts without LINK', async () => {
            await expectRevert.unspecified(
                randomNumberConsumer.getRandomNumber(seed, {
                    from: defaultAccount,
                }),
            )
        })
        it('#can request and return a random number', async () => {
            await link.transfer(randomNumberConsumer.address, web3.utils.toWei('1', 'ether'), {
                from: defaultAccount,
            })
            let tx = await randomNumberConsumer.getRandomNumber(seed, { from: defaultAccount })
            // just checking that is has logs
            // console.log(tx.receipt.rawLogs)
            assert.exists(tx.receipt.rawLogs, 'The tx hasnt been made!')
            let requestId = await randomNumberConsumer.lastRequestId({ from: defaultAccount })
            await vrfCoordinatorMock.callBackWithRandomness(requestId, '777', randomNumberConsumer.address, { from: defaultAccount })
            let randomNumber = await randomNumberConsumer.randomResult({ from: defaultAccount })
            assert.equal(randomNumber, 777)
        })

    })
})
