import app from './../application';

import commentTpl from './../../themes/templates/directives/comment.list.tpl.jade';


app.directive('commentList', () => {
	return {
		restrict: 'E',
		template: commentTpl,
		scope: {
			comments: '='
		}
	}
});