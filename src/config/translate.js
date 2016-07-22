import app from './../application';

import uaLang from './../libs/lang-ua.json';
import enLang from './../libs/lang-en.json';


app.config(($translateProvider) => {

	// $translateProvider.useStaticFilesLoader({
	// 	prefix: './../libs/lang-',
	// 	suffix: '.json'
	// });

	$translateProvider.translations('ua', uaLang);

	$translateProvider.translations('en', enLang);

	$translateProvider.preferredLanguage('ua');

});