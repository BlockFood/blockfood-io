;(function () {

    'use strict'

    // iPad and iPod detection
    var isiPad = function () {
        return (navigator.platform.indexOf('iPad') != -1)
    }

    var isiPhone = function () {
        return (
            (navigator.platform.indexOf('iPhone') != -1) ||
            (navigator.platform.indexOf('iPod') != -1)
        )
    }

    // Go to next section
    var gotToNextSection = function () {
        var el = $('.bfio-learn-more'),
            w = el.width(),
            divide = -w / 2
        el.css('margin-left', divide)
    }

    // Loading page
    var loaderPage = function () {
        $('.bfio-main-loader').fadeOut('slow')
    }

    // Scroll Next
    var ScrollNext = function () {
        $('body').on('click', '.scroll-btn', function (e) {
            e.preventDefault()

            $('html, body').animate({
                scrollTop: $($(this).closest('[data-next="yes"]').next()).offset().top
            }, 1000, 'easeInOutExpo')
            return false
        })
    }

    // Click outside of offcanvass
    var mobileMenuOutsideClick = function () {

        $(document).click(function (e) {
            var container = $('#bfio-offcanvas, .js-bfio-nav-toggle')
            if (!container.is(e.target) && container.has(e.target).length === 0) {

                if ($('body').hasClass('offcanvas-visible')) {

                    $('body').removeClass('offcanvas-visible')
                    $('.js-bfio-nav-toggle').removeClass('active')

                }
            }
        })

    }

    // Offcanvas
    var offcanvasMenu = function () {
        $('body').prepend('<div id="bfio-offcanvas" />')
        $('#bfio-offcanvas').prepend('<ul id="bfio-side-links">')
        $('body').prepend('<a href="#" class="js-bfio-nav-toggle bfio-nav-toggle"><i></i></a>')

        $('.left-menu li, .right-menu li').each(function () {
            var $this = $(this)
            $('#bfio-offcanvas ul').append($this.clone())
        })
    }

    // Burger Menu
    var burgerMenu = function () {

        $('body').on('click', '.js-bfio-nav-toggle', function (event) {
            var $this = $(this)

            $('body').toggleClass('bfio-overflow offcanvas-visible')
            $this.toggleClass('active')
            event.preventDefault()

        })

        $(window).resize(function () {
            if ($('body').hasClass('offcanvas-visible')) {
                $('body').removeClass('offcanvas-visible')
                $('.js-bfio-nav-toggle').removeClass('active')
            }
        })

        $(window).scroll(function () {
            if ($('body').hasClass('offcanvas-visible')) {
                $('body').removeClass('offcanvas-visible')
                $('.js-bfio-nav-toggle').removeClass('active')
            }
        })

    }

    var goToTop = function () {

        $('.js-gotop').on('click', function (event) {

            event.preventDefault()

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500)

            return false
        })

    }

    // Animations

    var contentWayPoint = function () {
        var i = 0
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {

                i++

                $(this.element).addClass('item-animate')
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this)
                        setTimeout(function () {
                            el.addClass('fadeInUp animated')
                            el.removeClass('item-animate')
                        }, k * 200, 'easeInOutExpo')
                    })

                }, 100)

            }

        }, { offset: '95%' })
    }

    var toggleDescription = function () {
        $('#bfio-team .bfio-project-item').each(function (a, e) {
            var parent = $(e)
            var description = $('.description', parent)

            var getDescriptionHeight = function () {
                var previousHeight = description.css('height')
                description.css({ height: 'auto' })
                var height = description.height()
                description.css({ height: previousHeight })
                return height
            }

            $(e).on('click', function () {
                parent.toggleClass('with-description')

                var isActivated = parent.hasClass('with-description')

                if (isActivated) {
                    var height = getDescriptionHeight()
                    description.css({ height: 0 })
                    setTimeout(function () {
                        description.css({ height: height + 'px' })
                    }, 50)
                } else {
                    setTimeout(function () {
                        description.css({ height: 0 })
                    }, 50)
                }
            })
        })
    }

    var startAnimation = function (animation, animationId, animationName) {
        var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation
        init()

        function init() {
            canvas = document.getElementById(animationId)
            anim_container = document.getElementById(animationId + '_container')
            dom_overlay_container = document.getElementById(animationId + '_overlay')
            handleComplete()
        }

        function handleComplete() {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            exportRoot = new animation[animationName]()
            stage = new createjs.Stage(canvas)
            stage.addChild(exportRoot)
            //Registers the "tick" event listener.
            fnStartAnimation = function () {
                createjs.Ticker.setFPS(animation.properties.fps)
                createjs.Ticker.addEventListener('tick', stage)
            }

            //Code to support hidpi screens and responsive scaling.
            function makeResponsive(isResp, respDim, isScale, scaleType) {
                var lastW, lastH, lastS = 1
                window.addEventListener('resize', resizeCanvas)
                resizeCanvas()

                function resizeCanvas() {
                    var w = animation.properties.width, h = animation.properties.height
                    var iw = window.innerWidth, ih = window.innerHeight
                    var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1
                    if (isResp) {
                        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                            sRatio = lastS
                        }
                        else if (!isScale) {
                            if (iw < w || ih < h)
                                sRatio = Math.min(xRatio, yRatio)
                        }
                        else if (scaleType == 1) {
                            sRatio = Math.min(xRatio, yRatio)
                        }
                        else if (scaleType == 2) {
                            sRatio = Math.max(xRatio, yRatio)
                        }
                    }
                    if (canvas.width !== ~~(w * pRatio * sRatio)) {
                        canvas.width = w * pRatio * sRatio
                        canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px'
                    }
                    if (canvas.height !== ~~(h * pRatio * sRatio)) {
                        canvas.height = h * pRatio * sRatio
                        canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px'
                    }
                    stage.scaleX = pRatio * sRatio
                    stage.scaleY = pRatio * sRatio
                    lastW = iw
                    lastH = ih
                    lastS = sRatio
                }
            }

            makeResponsive(true, 'both', false, 1)
            fnStartAnimation()
        }
    }

    var timeline = function () {
        $('.cntl').cntl({})
    }

    var debounce = function (fn, delay) {
        var timeout
        return function () {
            clearTimeout(timeout)
            timeout = setTimeout(fn, delay)
        }
    }

    var toggleHeader = function () {
        $(window).on('scroll', toggleClass)
        toggleClass()

        function toggleClass() {
            var windowTop = $(window).scrollTop()
            if (windowTop === 0) {
                $(document.body).removeClass('scrolled')
            } else {
                $(document.body).addClass('scrolled')
            }
        }
    }

    var updateNavigation = function () {
        $(window).on('scroll', debounce(onScroll, 50))
        onScroll()

        function onScroll() {
            var halfWindowHeight = $(window).height() / 2 - 50
            var allNav = []
            $('#bfio-header a.main-nav').each(function (i, e) {
                var href = $(e).attr('href')
                if (/#/.test(href)) {
                    var ref = href.replace(/.+#/, '')
                    var distance = $('a[name="' + ref + '"]').offset().top - $(window).scrollTop()

                    allNav.push({ distance: distance, nav: $(e) })
                }
            })
            var closest = allNav.reduce(function (closest, nav) {
                if (nav.distance <= halfWindowHeight && nav.distance > closest.distance) {
                    return nav
                }
                return closest
            }, allNav[0])

            allNav.forEach(function (nav) {
                if (nav === closest && nav.distance <= halfWindowHeight) {
                    nav.nav.addClass('active')

                } else {
                    nav.nav.removeClass('active')
                }
            })
        }
    }

    var handleSubscribe = function () {
        $('.subscribe-email').on('keydown', function (e) {
            if (e.key === 'Enter') {
                trySubscribe()
            }
        })
        $('.subscribe-btn').on('click', function (e) {
            e.preventDefault()
            trySubscribe()
        })

        function trySubscribe() {
            var email = $('.subscribe-email').val()

            $.get('https://blockfood.io/user/new?email=' + encodeURIComponent(email))
                .done(function (response) {
                    if (/^KO/.test(response)) {
                        onFailure()
                    } else {
                        onSuccess()
                    }
                })
                .fail(onFailure)
        }

        function onFailure() {
            $('.subscribe-error').css({ display: 'inline-block' })
        }

        function onSuccess() {
            $('.subscribe-success').css({ display: 'inline-block' })
            $('.subscribe-form').css({ display: 'none' })
            $('.subscribe-error').css({ display: 'none' })
        }
    }


    var lets = function (fn) {
        try {
            fn()
        } catch (e) {
            console.log(fn.name + ' failed')
        }
    }

    /*
    Pre-sale workflow
     */

    var preSaleRouter = function () {
        var hash = window.location.hash

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

    // Document on load.
    $(function () {
        lets(gotToNextSection)
        lets(loaderPage)
        lets(ScrollNext)
        lets(mobileMenuOutsideClick)
        lets(offcanvasMenu)
        lets(burgerMenu)
        lets(goToTop)
        lets(toggleDescription)
        lets(function startAnimation1() { startAnimation(animation1, 'animation_01', 'Anime_short') })
        lets(function startAnimation2() { startAnimation(animation2, 'animation_02', 'Anime_long') })
        lets(timeline)
        lets(toggleHeader)
        lets(updateNavigation)
        lets(handleSubscribe)
        lets(preSaleRouter)
        // Animate
        // contentWayPoint();

    })

}())