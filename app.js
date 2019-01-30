const express=require('express');
const server=express();
// Import the library:

const bodyParser=require('body-parser');

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