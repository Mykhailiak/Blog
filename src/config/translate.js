import app from './../application';


app.config(($translateProvider) => {
	$translateProvider.userStaticFilesLoader({
		prefix: './../libs/lang-',
		suffix: '.json'
	});

	$translateProvider.preferredLanguage('ua');
});