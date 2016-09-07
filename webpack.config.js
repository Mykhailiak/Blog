var webpack = require('webpack'),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	LiverReloadPlugin = require('webpack-livereload-plugin'),
	WebpackBuildNotifierPlugin = require('webpack-build-notifier'),
	autoprefixer = require('autoprefixer'),
	clearFix = require('postcss-clearfix'),
	path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		app: './front/index',
		admin: './admin/index'
	},
	output: {
		path: path.resolve(__dirname, './public/build/'),
		filename: '[name].js',
		publicPath: '/assets/'
	},
	resolve: {
		root: [path.resolve(__dirname, './src/')],
		extensions: ['', '.js', '.styl']
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'ng-annotate!babel?presets[]=es2015'},
			{test: /\.html$/, loader: 'ngtemplate!html'},
			{test: /\.jade$/, loader: 'jade'},
			{test: /(\.css|-css)$/, loader: ExtractTextPlugin.extract('style', 'css!postcss')},
			{test: /\.styl$/, loader: ExtractTextPlugin.extract('css!csslint?configFile=./configs/csslint!postcss!stylus?resolve url')},
			{test: /\.png$/, loader: 'url?limit=100000'},
			{test: /\.gif$/, loader: 'url?limit=10000'},
			{test: /\.json$/, loader: 'json'},
			{test: /\.(jpg|woff|woff2|eot|svg|ttf)(\?.*)?$/, loader: 'file'}
		]
	},
	postcss: function () {
		return [
				autoprefixer({browsers: ['last 3 version']}),
				clearFix
		];
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		}),
		new ExtractTextPlugin('styles.css', {allChunks: true}),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			_ : 'lodash',
			'window.lodash': 'lodash'
		}),
		new webpack.NoErrorsPlugin(),
		new WebpackBuildNotifierPlugin(),
	],
	devtool: NODE_ENV === 'development' ? 'source-map' : null,
	noParse: [
		/angular[\/]angular\.js$/,
		/bootstrap\.js$/,
		/jquery\.js$/,
		/moment\.js$/,
		/ui\-bootstrap\-tpls\.js/
	]
};

switch(NODE_ENV) {
	case 'production':
		module.exports.plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				warnings: false,
				drop_console: true,
				unsafe: true
			})
		);
		break;
	case 'clearBuild':
		module.exports.plugins.push(
			new CleanWebpackPlugin(['build'], {
				root: path.resolve(__dirname, './public'),
				verbose: true,
				dry: false
			})
		);
		break;
};