import angular from 'angular';

import './../common';

export default angular.module('app', [
	'ui.router',
	'app.resources',
	'cgBusy',
	'ui.bootstrap',
	'ngMessages',
	'pascalprecht.translate',
	'uiGmapgoogle-maps'
	]).run(($state) => {
		$state.go('root.home');
	});