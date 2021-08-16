const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const commentSchema = new mongoose.Schema(
	{
		author: {
			type: Object,
			ref: "User",
		},
		body: {
			type: String,
			minLength: [1, "This is too short, try to comment with more content"],
			maxLength: [150, "You cannot exceed 150 characters"],
		},
		post: {
			type: ObjectId,
			ref: "Post",
		},
		slug: {
			type: String,
			unique: true,
			lowercase: true,
			index: true,
		},
	},
	{ timestamp: true }
);

module.exports = mongoose.model("Comment", commentSchema);
