const Mustache = require('mustache')
const fs = require('fs-extra-promise')
const minify = require('htmlmin')
const path = require('path')

const sourceFolder = path.join(__dirname, '/../blockfood.io')

const htmlTemplate = fs.readFileSync(path.join(sourceFolder, '_template.html'), 'utf-8')

const sourceFolderContent = fs.readdirSync(sourceFolder)

const templateHtmlFile = (content,
                          urls = {
                              index: 'https://blockfood.io/',
                              terms: 'https://blockfood.io/terms',
                              privacy: 'https://blockfood.io/privacy',
                              disclaimer: 'https://blockfood.io/disclaimer',
                              whitepaper: 'https://whitepaper.blockfood.io/',
                          },
                          social = {
                              url: 'https://blockfood.io/',
                              name: 'BlockFood - Give the sharing economy back to the people',
                              description: 'World\'s first decentralized food ordering platform',
                          },
                          template = htmlTemplate) => {
    return minify(Mustache.render(template, {
        content, urls, social
    }))
}

const getHtmlFiles = () => sourceFolderContent
    .filter(f => /\.html$/.test(f))
    .filter(f => f !== '_template.html')
    .map(f => ({
        name: f,
        path: path.join(sourceFolder, f),
        content: fs.readFileSync(path.join(sourceFolder, f), 'utf-8').toString()
    }))
    .map(f => {
        const htmlFile = Object.assign({}, f)
        console.log(`\tRender ${f.name}...`)
        htmlFile.rendered = templateHtmlFile(f.content)
        return htmlFile
    })

const buildHtmlFiles = async (buildPath) => {
    const htmlFiles = getHtmlFiles()

    await Promise.all(htmlFiles.map(
        htmlFile => fs.writeFileAsync(path.join(buildPath, htmlFile.name), htmlFile.rendered, 'utf-8')
    ))
}

const getOtherFiles = () => sourceFolderContent
    .filter(f => !/\.html$/.test(f))
    .map(f => ({
        name: f,
        path: path.join(sourceFolder, f)
    }))

const copyOtherFiles = async (buildPath) => {
    const otherFiles = getOtherFiles()

    await Promise.all(otherFiles.map(
        otherFile => {
            console.log(`\tCopy ${otherFile.name}...`)
            return fs.copyAsync(otherFile.path, path.join(buildPath, otherFile.name))
        }
    ))
}

module.exports = {
    templateHtmlFile,
    buildHtmlFiles,
    copyOtherFiles
}