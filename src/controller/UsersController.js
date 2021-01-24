const user = require('../models/user')
const mongoose = require( "mongoose" );
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );

exports.login = ( req, res, next ) => {
  const { userName, password } = req.body;
  user.find( { userName: userName }, ( err, result ) => {
    if ( err ) {
      return res.render( 'home', {
        message: "Invalid User"
      } )
    } else {
      if ( result.length > 0 ) {
        bcrypt.hash( req.body.password, 10, ( err, hash ) => {
          if ( err ) {
            return res.render( 'home', {
              message: "Invalid User"
            } )
          }
          bcrypt.compare( password, result[0].password, ( err, isAuthentic ) => {
            if ( isAuthentic ) {
              const token = jwt.sign( {
                userName: result[0].userName,
                _id: result[0]._id,
                is_admin: result[0].is_admin
              }, "AddSkill", {
                expiresIn: "1h"
              } );
              result[0].token = token;
              res.status( 200 ).json( {
                token: token,
                data: result[0]
              } )
            } else {
              res.status( 500 ).json( {
                message: "Login Failed",

              } )
              // return res.render( 'home', {
              //   message: "Auth Failed !"
              // } )
            }
          } )
        } );
      } else {
        res.status( 500 ).json( {
            message: "Login Failed",
          } )
      }
    }
  } )
}
exports.getById = ( req, res, next ) => {
  let token = req.headers.authorization;
  try {
    const decode = jwt.verify( token, "AddSkill" );
    console.log( "userName", decode.userName )
    user.findOne( { userName: decode.userName }, ( err, userInfo ) => {
      if ( err ) {
        // res.render( 'dashboad', {
        //   message: "Somthing went wrong " + err.message
        // } )
        res.status( 500 ).json( {
          "status": false,
          "message": "Internal Server error",
          "error": err
        } )
      } else {
        res.status( 200 ).json( {
          "status": true,
          "message": "Success",
          "userInfo": userInfo
        } )
      }
    } )
  } catch ( e ) {
    res.status( 401 ).json( {
      "status": false,
      "message": "Please Login First " + e
    } )
  }
}
exports.createUser = ( req, res, next ) => {
     console.log("Hello I m ",req.body)
  user.find( { userName: req.body.userName }, ( err, docs ) => {
    if ( err ) {      
      return res.status( 500 ).json( {
        "status": false,
        "message": "Internal Server Error"
      } )
    } else {
      if ( docs.length > 0 ) {        
        return res.status( 419 ).json( {
          "status": false,
          "message": "UserName Already Exist"
        } )
      } else {
        bcrypt.hash( req.body.password, 10, ( err, result ) => {
          if ( err ) {
            return res.status( 500 ).json( {
              "message": "Internal Server Error"
            } )
           
          } else {
            const customer = new user( {
              _id: mongoose.Types.ObjectId(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              password: result,
              phoneNo: req.body.phoneNo,
              email: req.body.email,
              userName: req.body.userName,
            } );
            customer
              .save()
              .then( ( result ) => {
                // res.render( 'home', {
                //   message: "Register Successfully Please Login !"
                // } )
                res.status( 201 ).json( {
                  status: true,
                  message: "User Register Successfully",
                } );
              } )
              .catch();
          }
        } );
      }
    }
  } );
};