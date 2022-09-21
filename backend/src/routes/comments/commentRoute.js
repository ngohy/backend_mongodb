const router = require('express').Router();
const commentController = require('../../controllers/commentController');
const verifyToken = require('../../middleware/Auth');

// CREATE COMMENT 
router.post('/createComment',verifyToken, commentController.createComment);

//delete comment
router.delete('/deleteComment/:id',verifyToken, commentController.deleteComment);

//update comment
router.put('/updateComment/:id',verifyToken, commentController.updateComment);

module.exports = router;


