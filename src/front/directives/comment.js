import app from './../application';

import commentTpl from './../../themes/templates/directives/comment.tpl.jade';


app.directive('comment', () => {
	return {
		restrict: 'E',
		template: commentTpl,
		scope: {
			comment: '=data'
		},
		controller: 'CommentCtrl'
	}
});