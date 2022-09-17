const router = require('express').Router();
const commentController= require('../../controllers/commentController');

// CREATE COMMENT 
router.post('/createComment',commentController.createComment);

//delete comment
// router.delete('/deleteComment')

//update comment
// router.put('/updateComment')

module.exports= router;


