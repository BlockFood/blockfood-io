;(function () {
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

    var lets = function (fn) {
        try {
            fn($)
        } catch (e) {
            console.log(fn.name + ' failed')
        }
    }


    var initPage = window.init_page ? window.init_page : function() {}

    // Document on load.
    $(function () {
        lets(gotToNextSection)
        lets(loaderPage)
        lets(ScrollNext)
        lets(mobileMenuOutsideClick)
        lets(offcanvasMenu)
        lets(burgerMenu)
        lets(function startAnimation1() { startAnimation(animation1, 'animation_01', 'Anime_short') })
        lets(function startAnimation2() { startAnimation(animation2, 'animation_02', 'Anime_long') })
        lets(toggleHeader)
        lets(updateNavigation)
        lets(initPage)
    })

}())