const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    nic:{
        type:String

    },
    NO:{
        type:String


    },
    mobile:{

        type:String
    }



},
{
    collection:'user'
    
}
)
module.exports = mongoose.model('user',User)


