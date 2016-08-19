import module from './module';

import userListTpl from './../../themes/templates/directives/user.list.tpl.jade';


module.directive('userList', () => {
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