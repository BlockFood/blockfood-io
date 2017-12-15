const fs = require('fs-extra-promise')
const path = require('path')

const { buildHtmlFiles, copyOtherFiles} = require('./build-util')

const build = async () => {
    console.log(`Start build`)

    const buildPath = path.join(__dirname, '/../build/')

    await fs.removeAsync(buildPath)
    await fs.ensureDirAsync(buildPath)

    await buildHtmlFiles(buildPath)
    await copyOtherFiles(buildPath)

    console.log(`Build success`)
}

build().catch(e => console.log(e))