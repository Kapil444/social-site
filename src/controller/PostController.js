const posts = require( "../models/post" );
const user = require( '../models/user' );
const mongoose = require( 'mongoose' );
const jwt = require( 'jsonwebtoken' );
const post = require( "../models/post" );
const follow = require( "../models/follow" );
const e = require( "express" );

exports.createPost = ( req, res, next ) => {
    let token = req.headers.authorization;
    let decode
    try {
        decode = jwt.verify( token, "AddSkill" );
    } catch ( e ) {
        res.status( 401 ).json( {
            "status": flase,
            "message": "Auth Failed"
        } )
    }
    req.body.userName = decode.userName;

    const post = new posts( {
        _id: mongoose.Types.ObjectId(),
        message: req.body.message,
        userName: req.body.userName,
        like: req.body.like,
        comment: req.body.comment,
        image: req.body.image,
        userId: mongoose.Types.ObjectId( req.body.userId )
    } );
    post.save().then( result => {
        res.status( 201 ).json( {
            "status": true,
            "message": "Posts Added successfully"
        } )
    } ).catch( error => {
        res.status( 500 ).json( {
            "status": false,
            "message": "Internal Server error",
            "error": error
        } )
    } )
}
exports.follow = (req,res,next) =>{
    let token = req.headers.authorization;
    let decode
    try {
        decode = jwt.verify( token, "AddSkill" );
    } catch ( e ) {
        res.status( 401 ).json( {
            "status": flase,
            "message": "Auth Failed"
        } )
    }
    user.findOne({userName:decode.userName},(err,doc)=>{
        if(err){
            res.status(500).json({
                "status":false,
                "message" : err
            })
        }else{
            const id = req.body.user_id;
            user.findById(id,(erro,data1)=>{
                console.log("Error : ",erro , " Doc : ",doc ,"DAta 1 : ",data1)
                if(err){
                    res.status(500).json({
                        status : false,
                        message : erro
                    })
                }
                const folow = new follow({
                    _id :mongoose.Types.ObjectId(),
                    userName : doc.firstName,
                    userId :req.body.user_id,
                    followerId : doc._id,  
                    followerName : data1.firstName              
                });
                follow.find({userId : req.body.user_id,followerId : doc._id},(err,result)=>{
                   if(result.length == 0){
                    folow.save().then(data=>{
                        res.status(200).json({
                            "status":true,
                            "message" : "Successfully follow",
                            "data" : data
                        })
                    }).catch((err)=>{
                        res.status(500).json({
                            "status":false,
                            "message" : err
                        })
                    })
                   }else{
                       res.status(419).json({
                           "status" : 419,
                           "message" : "Already Follow this user"
                       })
                   }
                    
                })   
            })
                     
        }
    })

}
exports.getAllPost = ( req, res, next ) => {
    var mysort = { date: -1 };
    post.find( ( err, data ) => {
        if ( err ) {
            res.status( 500 ).json( {
                message: "Somthing went wrong " + err.message
            } )
        } else {
            res.status( 200 ).json( {
                "status": true,
                postList: data
            } )
        }
    } ).sort( mysort );
}
exports.getFollowingByUser = (req,res,next) =>{
    follow.find({userId : req.params.userId},(err,doc)=>{
        if(err){
            res.status(500).json({
                "status" : false, 
                message : "Internal Server Error"
            })
        }else{
            res.status(200).json({
                status : true,
                message : "Successfully Message Retrive",
                followingList : doc
            })
        }
    })
}
exports.getFollowerById = (req,res,next) =>{
    follow.find({followerId : req.params.userId},(err,doc)=>{
        if(err){
            res.status(500).json({
                "status" : false, 
                message : "Internal Server Error"
            })
        }else{
            res.status(200).json({
                status : true,
                message : "Successfully Retrive",
                followerList : doc
            })
        }
    })
}
exports.getPostByUserId = ( req, res, next ) => {
   
    var mysort = { date: -1 };
    console.log(req.params)
    post.find({userId : req.params.id}, ( err, data ) => {
        if ( err ) {
            res.status( 500 ).json( {
                message: "Somthing went wrong " + err
            } )
        } else {
            res.status( 200 ).json( {
                "status": true,
                postList: data
            } )
        }
    } ).sort( mysort );
}

exports.getPostByUserName = ( req, res, next ) => {
    let token = req.headers.authorization;
    let decode
    try {
        decode = jwt.verify( token, "AddSkill" );
    } catch ( e ) {
        res.status( 401 ).json( {
            "status": flase,
            "message": "Auth Failed"
        } )
    }
    var mysort = { date: -1 };
    console.log(req.params)
    post.find({userId : req.params.id}, ( err, data ) => {
        if ( err ) {
            res.status( 500 ).json( {
                message: "Somthing went wrong " + err
            } )
        } else {
            res.status( 200 ).json( {
                "status": true,
                postList: data
            } )
        }
    } ).sort( mysort );
}
