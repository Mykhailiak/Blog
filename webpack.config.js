var webpack = require('webpack'),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		app: './index',
	},
	output: {
		path: path.resolve(__dirname, './public/build/'),
		filename: '[name].js',
		publicPath: '/build/'
	},
	resolve: {
		root: [path.resolve(__dirname, './src/')],
		extensions: ['', '.js', '.styl']
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'ng-annotate!babel?presets[]=es2015'},
			{test: /\.html$/, loader: 'ngtemplate!html'},
			{test: /\.jade$/, loader: 'ngtemplate!html!apply!jade'},	//'ngtemplate!html!apply!jade', 'ngtemplate!html!jade', 'ngtemplate!html!apply!jade-html-loader'
			{test: /(\.css|-css)$/, loader: ExtractTextPlugin.extract('style', 'css')},
			{test: /\.styl$/, loader: ExtractTextPlugin.extract('css!stylus?resolve url')},
			{test: /\.png$/, loader: 'url?limit=100000'},
			{test: /\.gif$/, loader: 'url?limit=10000'},
			{test: /\.json$/, loader: 'json'},
			{test: /\.(jpg|woff|woff2|eot|svg|ttf)(\?.*)?$/, loader: 'file'}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css', {allChunks: true}),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			"window.jQuery": 'jquery'
		}),
		new webpack.NoErrorsPlugin()
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

if(NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			warnings: false,
			drop_console: true,
			unsafe: true
		})
	);
}
