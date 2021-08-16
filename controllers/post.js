const Post = require("../models/post");
const slugify = require("slugify");

exports.create = async (req, res) => {
	try {
		const { body } = req.body;
		res.json(await new Post({ body, slug: slugify(body) }).save());
	} catch (e) {
		req.status(400).send("Couldn't create a new post");
		console.log(e);
	}
};

exports.list = async (req, res) => {
	try {
		res.json(await Post.find({}).sort({ createdAt: -1 }).exec());
	} catch (e) {
		req.status(400).send("Couldn't get a list of all Post");
		console.log(e);
	}
};

exports.read = async (req, res) => {
	try {
		let post = await Post.findOne({ slug: req.params.slug }).exec();
		res.json(post);
	} catch (e) {
		req.status(400).send("Couldn't read a Post");
		console.log(e);
	}
};

exports.update = async (req, res) => {
	const { body } = req.body;
	try {
		const updated = await Post.findOneAndUpdate(
			{ slug: req.params.slug },
			{ body, slug: slugify(body) },
			{ new: true }
		);
		res.json(updated)
	} catch (e) {
		res.status(400).send("Couldn't update a Post");
		console.log(e);
	}
};

exports.delete = async (req, res) => {
	try {
		const deleted = await Post.findOneAndDelete({ slug: req.params.slug })	
		res.json(deleted);
	} catch (e) {
		res.status(400).send("Couldn't delete a Post");
		console.log(e);
	}
};
