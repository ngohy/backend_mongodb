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
        // next();
    },
    deleteComment: async (req, res, next) => {
        try {
            const id_Comment = req.params.id
            await Comment.findByIdAndDelete(id_Comment)
            res.status(200).json("delete successfully")
        } catch (err) {
            res.status(500).json(err)
        }
    },
    updateComment: async (req, res, next) => {
        try {
            const id_Comment = req.params.id;
            const updatedComment = await Comment.findOneAndUpdate(
                id_Comment,
                req.body
            )
            res.status(200).json(updatedComment)
        } catch (err) {
            res.status(500).json(err)
        }
    },
}

module.exports = commentController;