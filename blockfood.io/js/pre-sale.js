window.init_page = function ($) {
    /*
    Pre-sale workflow
     */

    var preSaleRouter = function () {
        var hash = window.location.hash

        getSmartContractAddress()

        var fakeApplication = {
            email: 'block@food.io',
            firstName: 'Block',
            lastName: 'Food',
            country: 'Awesomeland',
            sponsor: 'publicIdFromSponsor'
        }

        if (/forceStep=.+$/.test(hash)) {
            var step = hash.substr(hash.indexOf('forceStep=') + 'forceStep='.length)

            switch (step) {
            case '1':
                step1()
                break
            case '2A':
                step2A(fakeApplication)
                break
            case '2B':
                step2B(fakeApplication)
                break
            case '3':
                step3(fakeApplication)
                break
            case '4':
                step4({
                    state: applicationState.ACCEPTED,
                    contribution: '0.1',
                    publicId: 'public id'
                })
                break
            }
            return
        }

        if (!/privateId=.+$/.test(hash)) {
            step1()
        } else {
            var privateId = hash.substr(hash.indexOf('privateId=') + 'privateId='.length)

            getApplication(privateId).then(function (application) {
                if (application.isLocked) {
                    step3(application)
                } else if (application.firstName) {
                    step2B(application)
                } else {
                    step2A(application)
                }
            }).catch(function (error) {
                $('.step1').hide()
                $('.pre-sale .loading').hide()
                $('.pre-sale .error')
                    .show()
                    .append(error.responseJSON.error)
            })
        }
    }

    var step1 = function () {
        $('.step1').show()
        $('.step2a').hide()
        $('.step2b').hide()
        $('.step3').hide()

        $('.pre-sale .loading').hide()
        $('.pre-sale .error').hide()

        $('.apply-email').on('keydown', function (e) {
            if (e.key === 'Enter') {
                tryStep1()
            }
        })

        $('.apply-form .apply-btn').on('click', function (e) {
            e.preventDefault()
            tryStep1()
        })

        function tryStep1() {
            var email = $('.apply-email').val()

            $('.apply-email').attr('disabled', true)

            $('.apply-form .apply-btn')
                .val('In progress...')
                .attr('disabled', true)

            $('.apply-form-error').hide()
            $('.apply-form-success').hide()
            $('.apply-form-success .email').html(email)

            $.get(window.bfio.api + '/pre-sale/new?email=' + email)
                .done(function (response) {
                    if (/^KO/.test(response)) {
                        onFailure()
                    } else {
                        onSuccess()
                    }
                })
                .fail(function () {
                    onFailure()
                })
        }

        function onSuccess() {
            $('.apply-form-intro').hide()
            $('.apply-form').hide()
            $('.apply-form-advice').hide()
            $('.apply-form-success').show()
        }

        function onFailure() {
            $('.apply-email').attr('disabled', false)
            $('.apply-form .apply-btn')
                .val('Retry')
                .attr('disabled', false)
            $('.apply-form-error').show()
        }

    }

    var step2ALaunched = false
    var step2A = function (application) {
        Object.keys(application).forEach(function (field) {
            $('.step2a input[name="' + field + '"]').val(application[field])
        })

        $('.step1').hide()
        $('.step2a').show()
        $('.step2b').hide()
        $('.step3').hide()

        $('.pre-sale .loading').hide()
        $('.pre-sale .error').hide()

        if (!step2ALaunched) {
            $('#step2-form').submit(function (event) {
                event.preventDefault()
                var form = $('#step2-form').get(0)
                var formData = new FormData(form)

                $('.step2a .submit-error').hide()

                $.ajax({
                    type: 'POST',
                    url: window.bfio.api + '/pre-sale/edit/' + application.privateId, // the url where we want to POST
                    data: formData, // our data object
                    dataType: 'json', // what type of data do we expect back from the server
                    processData: false,
                    contentType: false
                }).then(function () {
                    preSaleRouter()
                }).catch(function (response) {
                    $('.step2a .submit-error').show()
                    $('.step2a .submit-error').text(response.responseJSON.error)
                })
            })
        }
        step2ALaunched = true
    }

    var step2B = function (application) {
        $('.step1').hide()
        $('.step2a').hide()
        $('.step2b').show()
        $('.step3').hide()

        $('.pre-sale .loading').hide()
        $('.pre-sale .error').hide()

        Object.keys(application).forEach(function (field) {
            if (application[field]) {
                $('.pre-sale .step2b .recap-' + field + ' .value').text(application[field])
            }
        })

        $('.pre-sale .step2b .step2b-btn-confirm').unbind('click')
        $('.pre-sale .step2b .step2b-btn-confirm').on('click', function (e) {
            e.preventDefault()

            lockApplication(application.privateId).then(preSaleRouter)
        })

        $('.pre-sale .step2b .step2b-btn-modify').unbind('click')
        $('.pre-sale .step2b .step2b-btn-modify').on('click', function (e) {
            e.preventDefault()

            step2A(application)
        })
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

    var publicIdClipboard = new Clipboard('.copy-applicant-id', {
        target: function (trigger) {
            return $('.publicId')[0]
        }
    })
    publicIdClipboard.on('success', function () {
        $('.applicant-id-copied').show()
        setTimeout(function () {
            $('.applicant-id-copied').hide()
        }, 5000)
    })

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

    var updateGasAdvice = function () {
        $.get('https://ethgasstation.info/json/ethgasAPI.json').then(function (data) {
            $('.estimates .slow .gwei').text(data.safeLow / 10)
            $('.estimates .slow .duration').text(data.safeLowWait)
            $('.estimates .normal .gwei').text(data.average / 10)
            $('.estimates .normal .duration').text(data.avgWait)
            $('.estimates .fast .gwei').text(data.fastest / 10)
            $('.estimates .fast .duration').text(data.fastestWait)
        })
    }

    updateGasAdvice()

    var step3 = function (application) {
        $('.step1').hide()
        $('.step2a').hide()
        $('.step2b').hide()
        $('.step3').show()

        $('.pre-sale .error').hide()

        $('.publicId').text(application.publicId)

        if (!window.web3) {
            $('.step3 .metamask-required').show()
            $('.pre-sale .loading').hide()
        } else if (!web3.eth.accounts[0]) {
            $('.step3 .metamask-unlock').show()
            $('.reloadBtn').on('click', function () {
                window.location.reload()
            })
            $('.pre-sale .loading').hide()
        } else {
            var eth = new Eth(window.web3.currentProvider)

            if (application.txHashes && application.txHashes.length > 0) {
                $('.existing-tx').show()

                $('.existing-tx .transactions').text('')

                for (var i = 0; i < application.txHashes.length; i++) {
                    var txHash = application.txHashes[i]
                    $('.existing-tx .transactions').append('<div><a target=\'_blank\' href=\'https://etherscan.io/tx/' + txHash + '\'>' + txHash + '</a>')
                }
            }

            getBlockFoodPreSaleSmartContract(eth).then(function (blockFoodPreSale) {

                $('.pre-sale .loading').hide()
                blockFoodPreSale.applications(web3.eth.accounts[0]).then(function (application) {
                    var state = numberToState(application.state.toNumber())
                    if (state !== applicationState.UNKNOWN) {
                        step4({
                            state: numberToState(application.state.toNumber()),
                            contribution: web3.fromWei(application.contribution, 'ether'),
                            publicId: application.id
                        })
                    }
                })

                var minimumContribution = 0.1

                var refreshMinimumAndMaximum = function () {
                    $('.ether-amount .maximum').text('(loading)')
                    $('.ether-amount .minimum').text('(loading)')

                    blockFoodPreSale.getMaximumContributionPossible().then(function (maximum) {
                        $('.ether-amount .maximum').text(web3.fromWei(maximum[0], 'ether'))
                    })

                    blockFoodPreSale.minContribution().then(function (minimum) {
                        $('.ether-amount .minimum').text(web3.fromWei(minimum[0], 'ether'))
                        minimumContribution = parseFloat(web3.fromWei(minimum[0], 'ether'))
                    })
                }
                refreshMinimumAndMaximum()
                $('.ether-amount a.refresh').on('click', function () {
                    refreshMinimumAndMaximum()
                })

                var refreshEthAddressAndBalance = function () {
                    $('.ethereum-characteristics .address').text(web3.eth.accounts[0])
                    $('.ethereum-characteristics .balance').text('(loading)')

                    web3.eth.getBalance(web3.eth.accounts[0], function (error, balance) {
                        var roundedBalance = web3.fromWei(balance, 'ether').toNumber().toFixed(3)
                        $('.ethereum-characteristics .balance').text(roundedBalance)
                    })
                }
                refreshEthAddressAndBalance()
                $('.ethereum-characteristics a.refresh').on('click', function () {
                    refreshEthAddressAndBalance()
                })

                $('.step3 .smart-contract-summary').show()
                $('.step3 .smart-contract-summary input[name="ether"]').focus()
                $('.step3 .step3-btn').unbind()
                $('.step3 .step3-btn').on('click', function (e) {
                    e.preventDefault()

                    var ether = $('.step3 input[name="ether"]').val()

                    if (ether >= minimumContribution) {
                        $('.step3 .warning').hide()
                        $('.step3 .error').hide()
                        $('.step3 .transaction-1').show()
                        $('.step3 .step3-btn')
                            .attr('disabled', true)

                        blockFoodPreSale.apply(application.publicId, {
                            value: web3.toWei(ether, 'ether'),
                            from: web3.eth.accounts[0]
                        })
                            .then(function (txHash) {
                                $.ajax({
                                    type: 'POST',
                                    url: window.bfio.api + '/pre-sale/tx/' + application.privateId + '/' + txHash,
                                }).then(function () {
                                    console.log('Add txHash', txHash)
                                }).catch(function (err) {
                                    console.log('Could not log txHash due to:', err)
                                })

                                $('.step3 .step3-btn')
                                    .unbind()
                                    .attr('disabled', true)

                                $('.step3 .ether-scan').show()
                                $('.step3 .ether-scan a').attr('href', 'https://etherscan.io/tx/' + txHash)
                                $('.step3 .ether-scan .tx').text(txHash)

                                $('.step3 .transaction-1').hide()
                                $('.step3 .transaction-2').show()

                                waitForTxToBeMined(eth, txHash, 500).then(function () {
                                    $('.step3 .transaction-2').hide()
                                    $('.step3 .transaction-3').show()
                                }).catch(function () {
                                    $('.step3 .transaction-2').hide()
                                    $('.step3 .transaction-3').hide()
                                    $('.step3 .error').show()
                                })
                            })
                            .catch(function (err) {
                                console.log('BlockFoodPreSale.apply() call failed', err)
                                $('.step3 .error').show()
                                $('.step3 .transaction-1').hide()
                                $('.step3 .step3-btn')
                                    .attr('disabled', false)
                            })
                    } else {
                        $('.step3 .warning').show()
                    }
                })
            }).catch(function (err) {
                console.log('Could not get blockFoorPreSale instance', err)
            })
        }
    }

    var step4 = function (participation) {
        $('.step1').hide()
        $('.step2a').hide()
        $('.step2b').hide()
        $('.step3').hide()
        $('.step4').show()

        $('.step4 .participation-summary .contribution .value').text(participation.contribution)
        $('.step4 .participation-summary .publicId .value').text(participation.publicId)
        $('.step4 .participation-summary .state .value').text(participation.state)

        if (participation.state === applicationState.PENDING) {
            $('.step4 .state-pending').show()
        } else if (participation.state === applicationState.REFUSED) {
            $('.step4 .state-refused').show()
        } else if (participation.state === applicationState.ACCEPTED) {
            $('.step4 .state-accepted').show()
        }

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

    var getApplication = function (privateId) {
        return $.get(window.bfio.api + '/pre-sale/review/' + privateId)
    }

    var lockApplication = function (privateId) {
        return $.get(window.bfio.api + '/pre-sale/lock/' + privateId)
            .then(function (e) {console.log('lock ok', e)})
            .catch(function (response) {console.log('lock failed', response.responseJSON)})
    }

    preSaleRouter()
}