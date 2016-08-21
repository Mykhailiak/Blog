import module from './../module';


import data from './../../libs/data.json';
import mapData from './../../libs/map.json';

import loadTpl from './../../themes/templates/preloader/preloadPromise.tpl.html';

module.value('cgBusyDefaults', {
	templateUrl: loadTpl,
	delay: 0,
	minDuration: 500,
	wrapperClass: 'preloader'
});

module.constant('backEndUrl', data.backEndUr);
module.constant('domainUrl', data.domain);
module.constant('defaultPhotoUrl', data.defaultPhoto);
module.value('socialSignUrl', data.socialSign);
module.value('roles', data.ROLES);
module.value('mapConst', mapData);