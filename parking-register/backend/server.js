let mongoose = require('mongoose');
let express= require('express');
let cors = require('cors')
let bodyparser = require('body-parser')
let dbconfig = require('../backend/database/db')

const Parkroute = require('../backend/routes/parkingroutes');

 mongoose.promise =global.promise

 mongoose.connect(dbconfig.db,{

    useNewUrlParser:true
 }).then(() =>{

    console.log('database connected')
 }).catch(err =>{

    console.log(' database not conneted')
 })


const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(cors());


app.use('/User',Parkroute)


const PORT = process.env.PORT || 4000;

const server = app.listen(PORT,()=>{


    console.log('PORT connected  '+PORT)
})
