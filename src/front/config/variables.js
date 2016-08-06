import app from './../application';

import data from './../../libs/data.json';
import mapData from './../../libs/map.json';

import loadTpl from './../../themes/templates/preloader_tpls/preloadPromise.tpl.html';

app.constant('backEndUrl', data.backEndUr);
app.value('roles', data.ROLES);
app.value('mapConst', mapData);
app.value('cgBusyDefaults', {
	templateUrl: loadTpl,
	delay: 0,
	minDuration: 3000,
	wrapperClass: 'preloader'
});