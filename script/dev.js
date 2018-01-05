const express = require('express')
const open = require('open')
const fs = require('fs')
const Mustache = require('mustache')

const { templateHtmlFile } = require('./build-util')


const link = page => `<a href='blockfood.io/${page}' style='font-size:18px'>${page}</a>`

const app = express()

const htmlFiles = fs.readdirSync(__dirname + '/../blockfood.io')
    .filter(f => /\.html$/.test(f))
    .map(f => f.replace('.html',''))

app.get('/', (req, res) => {
    res.send(htmlFiles.map(link).join('<br>'))
})

htmlFiles.forEach(file => {
    app.get('/blockfood.io/' + file, (req, res) => {
        try {
            const template = fs.readFileSync(__dirname + '/../blockfood.io/_template.html', 'utf-8')

            const file = fs.readFileSync(__dirname + '/../' + req.path + '.html', 'utf-8')


            res.write(templateHtmlFile(file, false, {
                index: '/blockfood.io/index',
                terms: '/blockfood.io/terms',
                privacy: '/blockfood.io/privacy',
                disclaimer: '/blockfood.io/disclaimer',
                presale : '/blockfood.io/pre-sale',
                whitepaper: 'https://whitepaper.blockfood.io/',
                api: 'http://localhost:3663'
            }, undefined, template))
            res.end()
        } catch(e) {
            res.send(e)
        }
    })
})

app.use('/blockfood.io', express.static(__dirname + '/../blockfood.io' ))

app.listen(8080)

open('http://localhost:8080')
