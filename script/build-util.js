const Mustache = require('mustache')
const fs = require('fs-extra-promise')
const minify = require('htmlmin')
const path = require('path')
const UglifyJS = require('uglify-es')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('postcss')
const purifycss = require('purify-css')

const sourceFolder = path.join(__dirname, '/../blockfood.io')

const htmlTemplate = fs.readFileSync(path.join(sourceFolder, '_template.html'), 'utf-8')

const sourceFolderContent = fs.readdirSync(sourceFolder)

const templateHtmlFile = (content,
                          isWhitePaper = false,
                          urls = {
                              index: 'https://blockfood.io/',
                              terms: 'https://blockfood.io/terms',
                              privacy: 'https://blockfood.io/privacy',
                              disclaimer: 'https://blockfood.io/disclaimer',
                              presale: 'https://blockfood.io/pre-sale',
                              whitepaper: 'https://whitepaper.blockfood.io/',
                              api: 'https://api.blockfood.io'
                          },
                          social = {
                              url: 'https://blockfood.io/',
                              name: 'BlockFood - Decentralized Food Ordering & Delivery Platform',
                              description: 'Decentralized Food Ordering & Delivery Platform built on smart contracts.',
                          },
                          template = htmlTemplate) => {

    const templatedContent = Mustache.render(content, { isWhitePaper, urls, social })
    return minify(Mustache.render(template, {
        content: templatedContent, isWhitePaper, urls, social
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

    // optimize js
    const js = otherFiles.find(f => /js$/.test(f.name))
    const jsFiles = fs.readdirSync(js.path)

    jsFiles.forEach(jsFile => {
        const source = path.join(js.path, jsFile)
        const destination = path.join(buildPath, 'js', jsFile)
        const content = fs.readFileSync(source, 'utf-8')
        const minified = UglifyJS.minify(content)

        if (minified.error) {
            console.log('failure for ' + jsFile, minified.error)
        }

        fs.writeFileSync(destination, minified.code, 'utf-8')
    })

    // optimize css
    const css = otherFiles.find(f => /css$/.test(f.name))
    const cssFiles = fs.readdirSync(css.path)

    await cssFiles.map(cssFile => {
        const source = path.join(css.path, cssFile)
        const destination = path.join(buildPath, 'css', cssFile)

        const content = fs.readFileSync(source, 'utf-8')

        return postcss([autoprefixer, cssnano])
            .process(content)
            .then(result => {
                result.warnings().forEach(function (warn) {
                    console.warn(source, warn.toString())
                })
                fs.writeFileSync(destination, result.css, 'utf-8')
            }).catch(e => console.log(e))
    })
}

module.exports = {
    templateHtmlFile,
    buildHtmlFiles,
    copyOtherFiles
}
