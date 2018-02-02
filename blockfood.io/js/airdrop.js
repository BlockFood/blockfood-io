window.init_page = function ($) {
    // hash utility functions

    var updateHash = function (key, newValue) {
        var hash = (window.location.href.split("#")[1] || "")
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
        var hash = (window.location.href.split("#")[1] || "")
        var values = hash.split('&').reduce(function (values, value) {
            values[value.split('=')[0]] = value.split('=')[1]
            return values
        }, {})

        return values[key]
    }

    /*
    Pre-sale workflow
     */


    var step1 = function () {
        var privateId = getValueFromHash('privateId')

        if (!privateId) {
            $('.no-privateId').show()
            return
        }

        $('.privateId').show()

        $.get(window.bfio.api + '/air-drop/review/' + privateId)
            .then(function (airDrop) {
                $('.pre-sale .loading').hide()

                var referralLink = 'https://blockfood.io/airdrop-register#ref=' + airDrop.publicId

                $('.referral-link').attr('href', referralLink).text(referralLink)

                $('#airdrop-form .email').val(airDrop.email)
            })

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
            var email = $('.apply-email').val().replace(/&/g, '')

            $('.apply-email').attr('disabled', true)

            $('.apply-form .apply-btn')
                .val('In progress...')
                .attr('disabled', true)

            $('.apply-form-error').hide()
            $('.apply-form-success').hide()
            $('.apply-form-success .email').html(email)

            $.get(window.bfio.api + '/air-drop/new?email=' + email + '&sponsor=' + ref)
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

    step1()
}