import app from './../application';

import userListTpl from './../../themes/templates/directives/user.list.tpl.jade';


app.directive('userList', () => {
	return {
		restrict: 'E',
		template: userListTpl,
		scope: {
			users: '=list',
			search: '=',
			options: '='
		}
	};
});