const express = require( 'express' );
const router = express.Router();
const postController = require( '../controller/PostController' )

router.post( '/create', postController.createPost );
router.get( "/get/all", postController.getAllPost );
router.post( "/follow", postController.follow )
router.get( "/by/user/:id", postController.getPostByUserName )
router.get( "/by/user/by/:id", postController.getPostByUserId )

router.get( "/following/user/:userId", postController.getFollowingByUser );
router.get( "/user/follower/:userId",postController.getFollowerById)
module.exports = router;