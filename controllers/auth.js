const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
	const { avatar, email } = req.user;

	const user = await User.findOneAndUpdate(
		{ email },
		{ name: email.split("@")[0], avatar },
		{ new: true }
	);
	if (user) {
		console.log("USER UPDATED", user);
		res.json(user);
	} else {
		const newUser = await new User({
			email,
			name: email.spilt("@")[0],
			avatar,
		}).save();
		console.log("USER CREATED", newUser);
		res.json(newUSer);
	}
};

exports.currentUser = async (req, res) => {
	User.findOne({ email: req.user.email }).exec((err, user) => {
		if (err) throw new Error(err);
		res.json(user);
	});
};
