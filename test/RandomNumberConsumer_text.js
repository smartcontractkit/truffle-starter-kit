/* eslint-disable @typescript-eslint/no-var-requires */
const { expectRevert } = require('@openzeppelin/test-helpers')
contract('RandomNumberConsumer', accounts => {
    const RandomNumberConsumer = artifacts.require('RandomNumberConsumer')
    const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')
    const defaultAccount = accounts[0]
    let randomNumberConsumer, seed, link

    beforeEach(async () => {
        link = await LinkToken.new({ from: defaultAccount })
        randomNumberConsumer = await RandomNumberConsumer.new(link.address, { from: defaultAccount })
        seed = 1
    })

    // TODO
    describe('#request random number', () => {
        it('reverts without LINK', async () => {
            await expectRevert.unspecified(
                randomNumberConsumer.getRandomNumber(seed, {
                    from: defaultAccount,
                }),
            )
        })

    })
})
