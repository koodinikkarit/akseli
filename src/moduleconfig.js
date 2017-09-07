module.exports = {
	"rules": [
		{
			"exclude": /node_modules/,
			"loader": "babel-loader",
			"test": /\.js$/,
		},
		{
			"test": /\.css$/,
			"exclude": /node_modules/,
			"use": [
				{
					"loader": "style-loader"
				},
				{
					"loader": "css-loader",
					"options": {
						"modules": true
					}
				}
			]
		},
		{
			"test": /\.(graphql|gql)$/,
			"exclude": /node_modules/,
			"loader": "graphql-tag/loader"
		}
	]
};