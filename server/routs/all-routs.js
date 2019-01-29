var Users = require('../models/model-user')
var current_time=require('../models/time');
module.exports=(server)=>{

    server.get('/getAllUsers', (req, res) => {
        Users.
            find((users)=>{return users}).
            limit(100).
            sort({ balance: 1 }).
            exec(function (err, users) {
                if (err) {
                    return res.json({ success: false, err: err })
                }
                res.json({ success: true, data: users })
            });
    })

    server.post('/addUser',(req,res)=>{
       
        const user=new Users({name:req.body.name,email:req.body.email,balance:req.body.balance,time:req.body.time})

        user.save((err, user) => {
            if (err) {
                return res.json({ success: false, err: err })
            }
            res.json({ success: true, data: user });
        });
    
        });
        server.delete('/getUser'+'/:user_id',(req,res)=>{
            var user_id=req.params.user_id;  
            Users.
            find({
                _id: { $in: [user] },
               
            }).
            exec(function (err, users) {
                if (err) {
                    return res.json({ success: false, err: err })
                }
                res.json({ success: true, data: users })
            }); 
            })
        server.post('/updateUser'+':user_id',(req,res)=>{
           /*  var user_update=req.params.user_id; */
           /*  var myquery={_id:user_update}
            var newValue={$set:{name:req.body.name,email:req.body.email,balance:req.body.balance,time:req.body.time}} */
            Users.findByIdAndUpdate(req.params.user_id,{$set:req.body},{new:true})
            .then(user=>{
                res.statusCode = 200;
                res.setHeader("Content-Type","application/json");
                res.json({ success: true, data: user })
              
            })
            .catch(err=>console.log(err));
            // Users.updateOne(myquery,newValue,{new:true},(err, user_update)=>{
            //     if (err) {
            //         return res.json({ success: false, err: err })
            //     }
            //     res.json({ success: true, data:user_update })  
            //  });
        })
        server.delete('/deleteUser'+'/:user_id',(req,res)=>{
         var user_delete=req.params.user_id;
         Users.deleteOne( {_id:user_delete},(err, user_delete)=>{
            if (err) {
                return res.json({ success: false, err: err })
            }
            res.json({ success: true, data:user_delete })  
         });
       /*   .exec(function (err, users) {
            if (err) {
                return res.json({ success: false, err: err })
            }
            res.json({ success: true, data: users })
        });
          
      */     
        });
    }