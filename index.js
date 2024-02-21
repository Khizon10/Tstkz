//yy
//__path = process.cwd();
//var favicon = require('serve-favicon');
var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
//const PORT = p 8080 || 5000 || 3000
//var { color } = require('./lib/color.js')
//const logger = require('morgan');
//////////////////////////////
var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api')


var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
//app.use(logger('dev'));
app.use(secure)
app.use(express.static("public"))

app.use('/', mainrouter);
app.use('/api', apirouter);

app.listen(8080, () => {
    console.log("Server rodando na porta 8080")
})

module.exports = app