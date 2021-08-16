const mongoose = require("mongoose");
const { ObjectId } = mongoos.Schema;

const postSchema = new mongoose.Schema(
	{
		type: String,
		trim: true,
		required: true,
		minLength: [1, "too shorti"],
		maxLength: [150, "TOO LONG"],
	},
	slug: {
		type: String,
		unique: true,
		lowercase: true,
		index: true,
	},
	{ timestamp: true }
);

module.exports = mongoose.model("Post", postSchema);
