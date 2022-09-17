const { Comment } = require('../models/comments/commentModel');


const commentController = {
    createComment: async (req, res, next) => {
        try {
            let newComment = new Comment(req.body);
            let saveComment = await newComment.save();
            res.status(200).json(saveComment);
        } catch (err) {
            res.status(500).json(err)
        }
        next();
    },
    //  deleteComment: async (req, res, next) => {
    //     try{
    //         let 
    //     }catch (err) {
    //     }
    //  }
}

module.exports = commentController;