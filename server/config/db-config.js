const mongoose=require('mongoose');

var db_url = 'mongodb://Asim:Socialstudy41@ds217125.mlab.com:17125/myresturant'
mongoose.connect(db_url, { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () { console.log('Successfully connected to DB') });