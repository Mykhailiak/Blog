import app from './../application';


app.config(($httpProvider) => {

	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$httpProvider.defaults.useXDomain = true;

	$httpProvider.defaults.headers.common['apiKey'] = '4ef73a7a69c24adaaa82ae3b595a1f2d4187a7aad6d58ab0c56c6b603d580235'


	$httpProvider.interceptors.push('httpRequestInterceptor');
});
