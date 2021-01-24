const moongose = require( 'mongoose' );
const followSchema = moongose.Schema( {
    _id: moongose.Types.ObjectId,
    userName: String,
    followerName:String,
    userId: moongose.Types.ObjectId,
    followerId: moongose.Types.ObjectId,
    date: { type: Date, default: Date.now }

} )
module.exports = moongose.model( 'Follow', followSchema );