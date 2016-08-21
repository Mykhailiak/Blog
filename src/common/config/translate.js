import module from './../module';

module.config(($translateProvider) => {

	$translateProvider.useStaticFilesLoader({
		prefix: '/languages/lang-',
		suffix: '.json'
	});

	$translateProvider.preferredLanguage('uk');

});