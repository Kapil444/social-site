const express = require( 'express' );
const app = express();
var cors = require('cors')
const mongoose = require( 'mongoose' );
const bodyParser = require( 'body-parser' );
const morgan = require( 'morgan' );
const usersRoute = require('./src/routers/user');
const postRoute = require('./src/routers/post')
const port = process.env.PORT || 5000
const uri = "mongodb+srv://admin:1234567890@cluster0.s11is.mongodb.net/socialmedia?retryWrites=true&w=majority";


app.use( morgan( 'dev' ) );


app.use(cors())

const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


//server Run on port 3000
app.listen( port, ( err ) => {
  if ( err ) { console.error( err ); }
  console.log( 'Listening on 5000' );
} );

// Use connect method to connect to the server
mongoose.connect( uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, function ( err, client ) {
  if ( err ) {
    console.log( err );
  } else {
    console.log( "Connected successfully to Database" );
  }

} );


//  parse application/x-www-form-urlencoded
app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( bodyParser.json() )



app.use( '/api/user', usersRoute );

app.use( '/api/post', postRoute );

  
  module.exports = app;
  