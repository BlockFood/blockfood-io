const express = require('express')
const open = require('open')
const fs = require('fs')
const Mustache = require('mustache')



const link = page => `<a href='blockfood.io/${page}' style='font-size:18px'>${page}</a>`



const app = express()

app.get('/', (req, res) => {
    const htmlFiles = fs.readdirSync(__dirname + '/../blockfood.io').filter(f => /\.html$/.test(f))
    res.send(htmlFiles.map(link).join('<br>'))
})

app.get('/blockfood.io/*.html', (req, res) => {
    try {
        const template = fs.readFileSync(__dirname + '/../blockfood.io/_template.html', 'utf-8')

        const file = fs.readFileSync(__dirname + '/../' + req.path, 'utf-8')

        const html = Mustache.render(template, {content : file.toString()})

        res.write(html)
        res.end()
    } catch(e) {
        res.send(e)
    }
})

app.use('/blockfood.io', express.static(__dirname + '/../blockfood.io' ))


app.listen(8080)

open('http://localhost:8080')