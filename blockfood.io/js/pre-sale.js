window.init_page = function($) {
    /*
    Pre-sale workflow
     */

    var preSaleRouter = function () {
        var hash = window.location.hash

        /*remove to activate pre-sale form*/
        step1()

        return
        /*end remove to activate pre-sale form*/

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
        /*
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
        */
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
                })
                    .then(function () {
                        preSaleRouter()
                    })
                    .catch(function (response) {
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
            $('.pre-sale .step2b .recap-' + field + ' .value').text(application[field])
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

    var step3 = function (application) {
        $('.step1').hide()
        $('.step2a').hide()
        $('.step2b').hide()
        $('.step3').show()

        $('.pre-sale .loading').hide()
        $('.pre-sale .error').hide()

        if (!window.web3) {
            $('.step3 .metamask-required').show()
        } else {
            var eth = new Eth(window.web3.currentProvider)

            var blockFoodPreSale = getBlockFoodPreSaleSmartContract(eth)

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


            $('.step3 .smart-contract-summary').show()
            $('.step3 .smart-contract-summary input[name="ether"]').focus()
            $('.step3 .step3-btn').unbind()
            $('.step3 .step3-btn').on('click', function (e) {
                e.preventDefault()

                var ether = $('.step3 input[name="ether"]').val()

                if (ether >= 0.5) {
                    $('.step3 .transaction-1').show()

                    blockFoodPreSale.apply(application.publicId, {
                        value: web3.toWei(ether, 'ether'),
                        from: web3.eth.accounts[0]
                    })
                        .then(function (txHash) {
                            $('.step3 .step3-btn')
                                .unbind()
                                .attr('disabled', true)

                            $('.step3 .ether-scan').show()
                            $('.step3 .ether-scan a').attr('href', 'https://rinkeby.etherscan.io/tx/' + txHash)
                            $('.step3 .ether-scan .tx').text(txHash)

                            $('.step3 .transaction-1').hide()
                            $('.step3 .transaction-2').show()

                            waitForTxToBeMined(eth, txHash, 500).then(function() {
                                $('.step3 .transaction-2').hide()
                                $('.step3 .transaction-3').show()
                            }).catch(function() {
                                $('.step3 .transaction-2').hide()
                                $('.step3 .transaction-3').hide()
                                $('.step3 .error').show()
                            })

                        })
                        .catch(function (err) {
                            console.log('BlockFoodPreSale.apply() call failed', err)
                            $('.step3 .error').show()
                        })
                } else {
                    $('.step3 .warning').show()
                }

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