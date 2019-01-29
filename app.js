const express=require('express');
const server=express();
// Import the library:
var cors = require('cors');
const bodyParser=require('body-parser');
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
server.use(cors());  
server.use(express.static('./build'));
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())

require('./server/config/db-config');
require('./server/routs/all-routs')(server);
/* var Users=require('./server/models/model-user'); */


server.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).send("Error Catched by error handler.")
})



server.listen(process.env.PORT || 8000,()=>{console.log('server has been successfully started!')})