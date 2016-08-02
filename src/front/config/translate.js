import app from './../application';

app.config(($translateProvider) => {

	$translateProvider.useStaticFilesLoader({
		prefix: '/languages/lang-',
		suffix: '.json'
	});

	$translateProvider.preferredLanguage('ua');

});