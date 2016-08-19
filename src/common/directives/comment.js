import module from './module';

import commentTpl from './../../themes/templates/directives/comment.tpl.jade';


module.directive('comment', () => {
	return {
		restrict: 'E',
		template: commentTpl,
		scope: {
			comment: '=data'
		},
		controller: 'CommentCtrl'
	}
});