const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: String,
		email: {
			type: String,
			required: true,
			index: true,
		},
		avatar: {
			type: String,
			required: true,
		},
		comments: {
			type: Array,
			default: [],
		},
	},
	{ timestamp: true }
);

module.exports = mongoose.model("User", userSchema);
