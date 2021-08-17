const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		fullname: String,
		username: String,
		email: {
			type: String,
			required: true,
			index: true,
		},
		avatar: {
			type: Array,
		},
		description: {
			type: String,
			minLength: 0,
			maxlength: [100, "It cannot be longer than 100 characters"],
		},
		role: {
			type: String,
			default: "writer",
		}
	},
	{ timestamp: true }
);

module.exports = mongoose.model("User", userSchema);
