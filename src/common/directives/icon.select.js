import module from './../module';

import iconSelectTpl from './../../themes/templates/directives/icon.select.tpl.jade';


module.directive('iconSelect', () => {
	return {
		restrict: 'E',
		scope: {
			status: '='
		},
		replace: true,
		template: iconSelectTpl
	}
});