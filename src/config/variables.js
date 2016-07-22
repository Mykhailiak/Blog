import app from './../application';
import data from './../libs/data.json';

import loadTpl from './../themes/templates/preloader_tpls/preloadPromise.tpl.html';

app.constant('backEndUrl', data.backEndUr);
app.value('cgBusyDefaults', {
	templateUrl: loadTpl,
	delay: 0,
	minDuration: 5000,
	wrapperClass: 'preloader'
});