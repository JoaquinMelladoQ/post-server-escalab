const Comment = require("../models/comment");
const slugify = require("slugify");

exports.create = async (req, res) => {
	try {
		const { body } = req.body;
		res.json(await new Comment({ body, slug: slugify(body) }).save());
	} catch (e) {
		req.status(400).send("Couldn't create a new comment");
		console.log(e);
	}
};

exports.list = async (req, res) => {
	try {
		res.json(await Comment.find({}).sort({ createdAt: -1 }).exec());
	} catch (e) {
		req.status(400).send("Couldn't get a list of all Comments");
		console.log(e);
	}
};

exports.read = async (req, res) => {
	try {
		let comment = await Comment.findOne({ slug: req.params.slug }).exec();
		res.json(comment);
	} catch (e) {
		req.status(400).send("Couldn't read a Comment");
		console.log(e);
	}
};

exports.update = async (req, res) => {
	const { body } = req.body;
	try {
		const updated = await Comment.findOneAndUpdate(
			{ slug: req.params.slug },
			{ body, slug: slugify(body) },
			{ new: true }
		);
		res.json(updated)
	} catch (e) {
		res.status(400).send("Couldn't update a Comment");
		console.log(e);
	}
};

exports.remove = async (req, res) => {
	try {
		const deleted = await Comment.findOneAndDelete({ slug: req.params.slug })	
		res.json(deleted);
	} catch (e) {
		res.status(400).send("Couldn't delete a Comment");
		console.log(e);
	}
};
