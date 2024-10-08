module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/img");

	return {
		dir: {
			input: "src",
			layouts: "layouts",
			data: "_data",
			output: "build",
			includes: "_includes"
		},
	};
};
