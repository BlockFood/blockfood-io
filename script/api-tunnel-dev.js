const apiTunnel = require('api-tunnel')
const fs = require('fs')
const os = require('os')
const path = require('path')
const https = require('https')

const go = async () => {
    const configuration = {
        routes: [
            {
                regex: /^\/admin\//,
                transformUrl: url => `http://localhost:25624${url}`
            },
            {
                regex: /.*/,
                transformUrl: url => `http://localhost:3663${url}`
            }
        ],
    }

    const app = await apiTunnel(configuration)

    const options = {
        key: fs.readFileSync('./localhost.key'),
        cert: fs.readFileSync('./localhost.cert'),
        requestCert: false,
        rejectUnauthorized: false
    }

    const port = 443
    const server = https.createServer(options, app)

    server.listen(port, () => {
        console.log('Express server listening on port ' + server.address().port)
    })
}

go().catch(e => console.log('api-tunnel failed', e))