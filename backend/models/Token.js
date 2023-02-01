const mongoose = require("mongoose");
const { Schema } = mongoose;

const TokenSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "user",
		unique: true,
	},
	token: { type: String, required: true },
	// note: 900 sec = 15min
	createdAt: { type: Date, default: Date.now, expires: 900 },
});

module.exports = mongoose.model("token", TokenSchema);