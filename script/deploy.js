const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

const config = require('../deploy-config')

ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished')
})