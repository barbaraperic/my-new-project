const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	module: {
		rules: [
			{ test: /\.svg$/, use: "svg-inline-loader" },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{ test: /\.(js)$/, use: "babel-loader" },
		],
	},
	output: {
		path: path.resolve(__dirname, "docs"),
		filename: "main.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
	],
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
