const config = require('../deploy-config')

const SftpUpload = require('sftp-upload')
const fs = require('fs')
const path = require('path')
const os = require('os')


const options = {
    host: config.host,
    username: config.username,
    path: config.localRoot,
    remoteDir: config.remoteRoot,
    privateKey: fs.readFileSync(path.join(os.homedir(), '.ssh', 'id_rsa'))
}

const sftp = new SftpUpload(options)

sftp.on('error', function (err) {
    throw err
})
    .on('uploading', function (progress) {
        console.log(progress.percent + '%\t', progress.file)         // same data as uploading event
    })
    .on('completed', function () {
        console.log('Upload Completed')
    })
    .upload()