import app from './../application';

import postListTpl from './../../themes/templates/directives/post.list.tpl.jade';


app.directive('postList', () => {
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