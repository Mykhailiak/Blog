import angular from 'angular';

import './../common.js';

export default angular.module('app', [
	'common',
	'ui.router',
	'app.resources',
	'cgBusy',
	'ui.bootstrap',
	'ngMessages',
	'pascalprecht.translate',
	'uiGmapgoogle-maps',
	'ngMaterial',
	'ngFileUpload',
	'angularMoment',
	'permission',
	'permission.ui',
	'ngImgCrop'
	]);