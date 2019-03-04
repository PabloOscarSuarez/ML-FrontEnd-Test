const express = require('express'),
    api = require('./server/api.js'),
    app = express()

app
    .set('port', (process.env.PORT) || 8080)
    .use(express.static(`${__dirname}/dist`))
    .use('/api', api)
    .get('*', (req, res) => {
        res.sendFile(`${__dirname}/dist/index.html`)
    })
    .listen(
        app.get('port'),
        () => console.log(`Express iniciado en el puerto ${app.get('port')}`)
    )