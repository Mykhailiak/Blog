import app from './../application';

app.config(($httpProviderб $resourceProvider) => {

	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$resourceProvider.defaults.stripTrailingSlashes = true;

	$httpProvider.defaults.useXDomain = true;
});