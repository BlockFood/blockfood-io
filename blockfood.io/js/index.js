window.init_page = function($) {
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

    var timeline = function () {
        $('.cntl').cntl({})
    }

    toggleDescription()
    handleSubscribe()
    timeline()

    var preSaleEnd = new Date('2018-02-08T16:00:00.000Z')

    $(".pre-sale-countdown")
        .countdown(preSaleEnd.getTime(), function(event) {
            $(this).text(
                event.strftime('%I:%M:%S')
            );
        })
}