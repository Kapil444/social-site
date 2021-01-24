const moongose = require('mongoose');
const userSchema = moongose.Schema({
    _id : moongose.Types.ObjectId,
    firstName : String,
    lastName : String,
    password : String,
    phoneNo : {type:String},
    email : {type:String,required:true},
    userName : {
        type : String,
        required : true,
        unique : true
    }

})
module.exports = moongose.model('User',userSchema);