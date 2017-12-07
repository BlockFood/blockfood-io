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
        $('.bfio-loader').fadeOut('slow')
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
	var offcanvasMenu = function() {
		$('body').prepend('<div id="bfio-offcanvas" />');
		$('#bfio-offcanvas').prepend('<ul id="bfio-side-links">');
		$('body').prepend('<a href="#" class="js-bfio-nav-toggle bfio-nav-toggle"><i></i></a>');

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
                const previousHeight = description.css('height')
                description.css({ height: 'auto' })
                var height = description.height()
                description.css({ height: previousHeight })
                return height
            }

            $(e).on('click', function () {
                parent.toggleClass('with-description')

                const isActivated = parent.hasClass('with-description')


                if (isActivated) {
                    const height = getDescriptionHeight()
                    description.css({ height: 0 })
                    setTimeout(function () {
                        description.css({ height: height + 'px' })
                    }, 50)
                } else {
                    setTimeout(function() {
                        description.css({ height: 0 })
                    }, 50)
                }
            })
        })
    }

    // Document on load.
    $(function () {
        gotToNextSection()
        loaderPage()
        ScrollNext()
        mobileMenuOutsideClick()
        offcanvasMenu()
        burgerMenu()
        goToTop()
        toggleDescription()
        // Animate
        // contentWayPoint();

    })

}())