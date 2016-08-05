import app from './../application';

import commentTpl from './../../themes/templates/comment.list.tpl.jade';


app.directive('commentList', () => {
	return {
		restrict: 'E',
		template: commentTpl,
		scope: {
			comments: '='
		}
	}
})