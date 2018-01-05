window.init_page = function($) {
    var getBlockFoodPreSaleSmartContract = function(eth) {
        var contract = new EthContract(eth)

        var BlockFoodPreSale = contract(window.preSale.abi)

        return BlockFoodPreSale.at(window.preSale.address)
    }

    var applicationState = {
        PENDING: 'Pending',
        REFUSED: 'Refused',
        ACCEPTED: 'Accepted',
        UNKNOWN: 'Unknown'
    }

    var numberToState = function (number) {
        switch (number) {
        case 1:
            return applicationState.PENDING
        case 2:
            return applicationState.REFUSED
        case 3:
            return applicationState.ACCEPTED
        default:
            return applicationState.UNKNOWN
        }
    }

    var go = function() {
        var eth = new Eth(window.web3.currentProvider)

        var blockFoodPreSale = getBlockFoodPreSaleSmartContract(eth)

        blockFoodPreSale.applications(web3.eth.accounts[0]).then(function (application) {
            var state = numberToState(application.state.toNumber())

            console.log('??', state)
        })
    }

    go()
}