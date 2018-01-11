const apiTunnel = require('api-tunnel')
const fs = require('fs')
const os = require('os')
const path = require('path')

const go = async() => {
    const configuration = {
        tunnels: [
            {
                username: 'root',
                host: 'api.blockfood.io',
                port: 22,
                dstPort: 25624,
                localHost: '127.0.0.1',
                localPort: 25624,
                privateKey: fs.readFileSync(path.join(os.homedir(), '.ssh', 'id_rsa'), 'utf-8'),
            }
        ],
        routes: [
            {
                regex: /^\/admin\//,
                transformUrl: url => `http://localhost:25624${url}`
            },
            {
                regex: /.*/,
                transformUrl: url => `https://api.blockfood.io${url}`
            }
        ],
        port: 3663
    }

    await apiTunnel(configuration)
}

go().catch(e => console.log('api-tunnel failed', e))