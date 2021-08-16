const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const sharedSchema = new mongoose.Schema(
	{
		author: {
			type: ObjectId,
			ref: "User",
		},
		post: {
			type: ObjectId,
			ref: "Post",
		},
		type: Array,
	},
	{ timestamp: true }
);

module.exports = mongoose.Model("Share", sharedSchema)
