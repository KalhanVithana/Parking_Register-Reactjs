
const express =require('express');
router = express.Router();


const User = require('../model/parkingdetails')



router.route('/add').post(async(req,res)=>{

        try{

            const{ name,email,nic,NO,mobile} = req.body


            const user = new User({
    
                    name,
                    email,
                    nic,
                    NO,
                    mobile,
    
            })
    
           const  Savedata = await user.save()
    
           res.json(Savedata);
           console.log(Savedata)

        }catch(err){

            console.log(err)

        }



})


module.exports = router;