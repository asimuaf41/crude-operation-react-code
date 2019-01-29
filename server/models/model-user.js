const mongoose=require('mongoose');


const userSchema={name:String,email:String,balance:Number,time:String};
const Users=mongoose.model('users',userSchema);
module.exports=Users;