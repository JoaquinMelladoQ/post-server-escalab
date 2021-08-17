const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema(
	{
		author: {
			type: ObjectId,
			ref: "User",
		},
		body: {
			type: String,
			minLength: [1, "Your post must contain more content"],
			maxLength: [150, "You cannot exceed 150 characters"],
			required: true,
		},
		comment: {
			type: ObjectId,
			ref: "Comment",
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

module.exports = mongoose.model("Post", postSchema);
