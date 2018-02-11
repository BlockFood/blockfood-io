window.init_page = function ($) {
    // hash utility functions

    var updateHash = function (key, newValue) {
        var hash = (window.location.href.split('#')[1] || '')
        var keyFound = false
        var updatedHash = hash.split('&').reduce(function (hash, value, i) {
            var currentKey = value.split('=')[0]
            var currentValue = value.split('=')[1]

            if (currentKey === key) {
                keyFound = true
            }
            return hash + (i !== 0 ? '&' : '') + currentKey + '=' + (currentKey === key ? newValue : currentValue)
        }, '')

        if (!keyFound) {
            updatedHash = updatedHash + (updatedHash.length > 0 ? '&' : '') + key + '=' + newValue
        }

        window.location.hash = updatedHash
    }

    var getValueFromHash = function (key) {
        var hash = (window.location.href.split('#')[1] || '')
        var values = hash.split('&').reduce(function (values, value) {
            values[value.split('=')[0]] = value.split('=')[1]
            return values
        }, {})

        return values[key]
    }

    /*
    Pre-sale workflow
     */

    var preSaleRouter = function () {
        var hash = window.location.hash

        $('.step1').show()
    }

    var getSmartContractAddress = function () {
        return $.ajax({
            type: 'GET',
            url: window.bfio.api + '/pre-sale/smart-contract'
        }).then(function (response) {
            console.log('Contract is at ', response.address)
            $('.pre-sale-smart-contract-address').text(response.address)
            return response.address
        })
    }
    getSmartContractAddress()

    var getBlockFoodPreSaleSmartContract = function (eth) {
        var contract = new EthContract(eth)

        var BlockFoodPreSale = contract(window.preSale.abi)

        return getSmartContractAddress().then(function (address) {
            return BlockFoodPreSale.at(address)
        }).catch(function (e) {
            console.log('Could not get contract address')
            throw(e)
        })
    }

    var applicationState = {
        PENDING: 'Pending',
        REFUSED: 'Refused',
        ACCEPTED: 'Accepted',
        REFUNDED: 'Refunded',
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
        case 4:
            return applicationState.REFUNDED
        default:
            return applicationState.UNKNOWN
        }
    }

    if (!window.web3) {
        $('.metamask-required').show()
        $('.pre-sale .loading').hide()
    } else if (!web3.eth.accounts[0]) {
        $('.metamask-unlock').show()
        $('.reloadBtn').on('click', function () {
            window.location.reload()
        })
        $('.pre-sale .loading').hide()
    } else {
        var eth = new Eth(window.web3.currentProvider)

        getBlockFoodPreSaleSmartContract(eth).then(function (blockFoodPreSale) {

            $('.pre-sale .loading').hide()
            $('.address').text(web3.eth.accounts[0])

            $('.refund-summary').show()

            blockFoodPreSale.applications(web3.eth.accounts[0]).then(function (application) {
                try {
                    var state = numberToState(application.state.toNumber())
                    var contribution = web3.fromWei(application.contribution, 'ether')


                    console.log(contribution)
                    if (state === applicationState.ACCEPTED) {
                        $('.refund-summary .state').text('Refundable')
                        $('.refund-summary .contribution').text(contribution)
                        $('.refund-form').show()
                    } else if (state === applicationState.REFUNDED) {
                        $('.refund-summary .state').text('Already refunded')
                    }
                } catch(e) {

                }
            })

            $('.step3-btn').unbind()
            $('.step3-btn').on('click', function (e) {
                e.preventDefault()

                $('.warning').hide()
                $('.error').hide()
                $('.transaction-1').show()
                $('.step3-btn')
                    .attr('disabled', true)

                blockFoodPreSale.refund({
                    from: web3.eth.accounts[0]
                })
                    .then(function (txHash) {
                        $('.step3-btn')
                            .unbind()
                            .attr('disabled', true)

                        $('.ether-scan').show()
                        $('.ether-scan a').attr('href', 'https://etherscan.io/tx/' + txHash)
                        $('.ether-scan .tx').text(txHash)

                        $('.transaction-1').hide()
                        $('.transaction-2').show()
                    })
                    .catch(function (err) {
                        console.log('BlockFoodPreSale.apply() call failed', err)
                        $('.error').show()
                        $('.transaction-1').hide()
                        $('.step3-btn')
                            .attr('disabled', false)
                    })
            })
        }).catch(function (err) {
            console.log('Could not get blockFoorPreSale instance', err)
        })
    }

    var waitForTxToBeMined = function (eth, txHash, pollTimeout) {
        return eth.getTransactionReceipt(txHash).then(function (transaction) {
            if (!transaction) {
                console.log('Waiting for transaction to be mined...', txHash)
                return new Promise(function (resolve) {
                    setTimeout(
                        function () {
                            resolve(waitForTxToBeMined(eth, txHash, pollTimeout))
                        },
                        pollTimeout
                    )
                })
            }
            console.log('Transaction mined !', transaction)
            if (transaction.status === '0x1') {
                return transaction
            } else {
                throw new Error('Transaction failed')
            }
        })
    }


    var contractAddressClipboard = new Clipboard('.copy-pre-sale-address', {
        target: function (trigger) {
            return $('.pre-sale-smart-contract-address')[0]
        }
    })
    contractAddressClipboard.on('success', function () {
        $('.pre-sale-address-copied').show()
        setTimeout(function () {
            $('.pre-sale-address-copied').hide()
        }, 5000)
    })

    var abiClipboard = new Clipboard('.copy-pre-sale-abi', {
        target: function (trigger) {
            return $('.pre-sale-abi')[0]
        }
    })
    abiClipboard.on('success', function () {
        $('.abi-copied').show()
        setTimeout(function () {
            $('.abi-copied').hide()
        }, 5000)
    })

    preSaleRouter()
}