import app from './../application';


app.config(($httpProvider) => {

	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$httpProvider.defaults.useXDomain = true;


	$httpProvider.interceptors.push('httpRequestInterceptor');
});
