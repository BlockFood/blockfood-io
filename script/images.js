const Jimp = require('jimp')
const fs = require('fs')
const path = require('path')

const destinationFolder = path.join(__dirname, '..', 'blockfood.io', 'images', 'team')
const sourceFolder = path.join(destinationFolder, 'high-res')
const images = fs
    .readdirSync(sourceFolder)
    .filter(f => /\.jpg/.test(f))

images.forEach(image => {
    const sourcePath = path.join(sourceFolder, image)
    const destinationPath = path.join(destinationFolder, image)

    Jimp.read(sourcePath).then(lenna => {
        lenna.resize(640, Jimp.AUTO)
            .quality(60)
            .write(destinationPath)
    })
})