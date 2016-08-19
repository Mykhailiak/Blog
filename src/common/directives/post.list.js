import module from './module';

import postListTpl from './../../themes/templates/directives/post.list.tpl.jade';


module.directive('postList', () => {
	return {
		restrict: 'E',
		template: postListTpl,
		scope: {
			posts: '=list',
			search: '=',
			options: '='
		},
		controller: 'PostListCtrl'
	};
});