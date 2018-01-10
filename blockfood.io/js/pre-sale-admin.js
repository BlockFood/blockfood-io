window.init_page = function ($) {
    var getBlockFoodPreSaleSmartContract = function (eth) {
        var contract = new EthContract(eth)

        var BlockFoodPreSale = contract(window.preSale.abi)

        return $.ajax({
            type: 'GET',
            url: window.bfio.api + '/pre-sale/smart-contract'
        }).then(function (response) {
            console.log('Contract is at ', response.address)
            return BlockFoodPreSale.at(response.address)
        }).catch(function (response) {
            console.log('Could not get contract address')
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

    var etherscanAddress = function (address) {
        return address ? `${address} <a target='_blank' href='https://etherscan.io/address/${address}'>Etherscan</a>` : 'n/a'
    }

    var hashLi = function (hash, i) {
        return `<a target='_blank' href='https://etherscan.io/tx/${hash}'>TX${i}</a>`
    }

    var hashes = function (hashes) {
        if (!hashes || hashes.length === 0) {
            return '0'
        }

        return `<div class='show-tx-hashes'>${hashes.map(hashLi).join('<br>')}</div>`
    }

    const pad = number => number < 10 ? `0${number}` : number
    const printDate = date => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`

    var applicationTr = function (application) {
        const date = application.latestAction
        return `
<tr>
    <td>${application.index}</td>
    <td>${printDate(date)}</td>
    <td>${application.publicId}</td>
    <td>${application.email}</td>
    <td>${application.country}</td>
    <td>${application.firstName}</td>
    <td>${application.lastName}</td>
    <td>${application.contribution ? application.contribution : ''}</td>
    <td>${etherscanAddress(application.address)}</td>
    <td>${hashes(application.txHashes)}</td>
</tr>
`
    }

    var appendApplications = function (step, applications) {
        $('.workflow .applications tbody').append(`<tr><td class='step-indicator' colspan='3'>${step} (${applications.length})</td></tr>`)
        applications.forEach(function (application) {
            $('.workflow .applications tbody').append(applicationTr(application))
        })
    }

    const go = function () {
        var eth = new Eth(window.web3.currentProvider)
        $('.workflow .applications tbody').text('')
        $('.application-loader').show()
        $('.applications').hide()

        return getBlockFoodPreSaleSmartContract(eth).then(function (preSale) {

            if (!preSale) {
                throw new Error('could not get contract instance')
            }

            web3.eth.getBalance(preSale.address, function (err, balance) {
                const amountRaised = parseFloat(web3.fromWei(balance.toNumber(), 'ether'))
                $('.smart-contract .amount-raised').text(amountRaised)
                $('.progress-baaar').css({ width: amountRaised + '%' })
                $('.progress-text').text(amountRaised + '%')
            })

            Promise.all([
                preSale.contributionPending(),
                preSale.contributionAccepted(),
                preSale.contributionRejected(),
            ]).then(function (data) {
                var contributionPending = data[0][0]
                var contributionAccepted = data[1][0]
                var contributionRejected = data[2][0]

                $('.amount-pending').text(web3.fromWei(contributionPending, 'ether'))
                $('.amount-accepted').text(web3.fromWei(contributionAccepted, 'ether'))
                $('.amount-rejected').text(web3.fromWei(contributionRejected, 'ether'))

            }).catch(function (e) {
                console.log('Could not update contributions', e)
            })

            web3.eth.getBalance(preSale.address, function (err, balance) {
                $('.smart-contract .amount-raised').text(web3.fromWei(balance.toNumber(), 'ether'))
            })

            return Promise.all([
                $.get(window.bfio.api + '/admin/pre-sale/review'),

                preSale.getApplicantsLength().then(function (applicantsLength) {
                    applicantsLength = applicantsLength[0].toNumber()
                    var preSaleApplicants = []
                    for (var applicant = 0; applicant < applicantsLength; applicant++) {
                        preSaleApplicants.push(preSale.applicants(applicant).then(function (applicant) {
                            return {
                                address: applicant[0],
                                publicId: applicant[1]
                            }
                        }))
                    }
                    return Promise.all(preSaleApplicants)
                })
            ]).then(function (data) {
                var applications = data[0]
                var preSaleApplicants = data[1]

                applications = applications.map(function (application) {
                    var smartContractApplicant = preSaleApplicants.find(function (preSaleApplicant) {
                        return preSaleApplicant.publicId === application.publicId
                    })
                    application.index = preSaleApplicants.indexOf(smartContractApplicant)
                    application.address = smartContractApplicant ? smartContractApplicant.address : ''

                    application.creation = new Date(application.creation)
                    application.lastUpdate = new Date(application.lastUpdate)
                    application.lockDate = new Date(application.lockDate)

                    const latestAction = Math.max(
                        application.creation.getTime(),
                        application.lastUpdate.getTime(),
                        application.lockDate.getTime()
                    )
                    application.latestAction = new Date(latestAction)

                    return application
                })

                var step1 = applications.filter(function (application) {
                    return application.index === -1 && !application.firstName
                })

                var step2 = applications.filter(function (application) {
                    return application.index === -1 && application.firstName && !application.isLocked
                })

                var step3 = applications.filter(function (application) {
                    return application.index === -1 && application.firstName && application.isLocked
                })

                var step4 = applications.filter(function (application) {
                    return application.index >= 0 && application.firstName && application.isLocked
                })

                var sortApplicationByDate = function (applications) {
                    return applications.sort(function (a1, a2) {
                        if (a1.index === a2.index && a1.country && a2.country) {
                            return a1.latestAction.getTime() < a2.latestAction.getTime() ? 1 : -1
                        }
                        return a1.index < a2.index ? 1 : -1
                    })
                }

                Promise.all(step4.map(function (application) {
                    return preSale.applications(application.address).then(function (smartContractApplication) {
                        application.contribution = web3.fromWei(smartContractApplication.contribution, 'ether')
                        application.state = numberToState(smartContractApplication.state.toNumber())
                        return application
                    })
                })).then(function (applications) {
                    var displayByState = function (state) {
                        appendApplications('step 4 - ' + state, sortApplicationByDate(applications.filter(function (application) {
                            return application.state === state
                        })))
                    }

                    displayByState(applicationState.PENDING)
                    displayByState(applicationState.ACCEPTED)
                    displayByState(applicationState.REFUSED)
                    displayByState(applicationState.REFUNDED)
                    displayByState(applicationState.UNKNOWN)

                    appendApplications('step 3', sortApplicationByDate(step3))
                    appendApplications('step 2', sortApplicationByDate(step2))
                    appendApplications('step 1', sortApplicationByDate(step1))

                    $('.application-loader').hide()
                    $('.applications').show()

                    $('.last-update').text(printDate(new Date()))
                })

                $('.smart-contract .applications-length').text(preSaleApplicants.length)

                preSaleApplicants.forEach(function (application, index) {
                    $('.smart-contract .applications').append(`
<div>
    ${index}: ${application.address} - ${application.publicId}
</div>`)
                })
            }).catch(function (err) {
                $('.workflow .applications').text('Check your tunnel, dude! 🐈')

                console.log('Could not get reviews', err)
            })
        })
    }

    go()

    $('.refresh-btn').on('click', () => go())
}