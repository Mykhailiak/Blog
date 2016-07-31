import app from './../application';

import postListTpl from './../../themes/templates/post.list.tpl.jade';


app.directive('postList', () => {
	return {
		restrict: 'E',
		template: postListTpl(),
		scope: {
			posts: '=list',
			search: '='
		}
	};
});