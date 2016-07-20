import app from './../application';

import iconSelectTpl from './../themes/templates/icon.select.tpl.jade';


app.directive('iconSelect', () => {
	return {
		restrict: 'E',
		scope: {
			status: '='
		},
		replace: true,
		template: iconSelectTpl()
	}
});