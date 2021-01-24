const moongose = require('mongoose');
const postSchema = moongose.Schema({
    _id : moongose.Types.ObjectId,
    message : String,
    userName:String,
    like : Number,
    comment : Number,
    userId : moongose.Types.ObjectId,
    date : {type : Date,default : Date.now},
   image : String
   
})
module.exports = moongose.model('Post',postSchema);