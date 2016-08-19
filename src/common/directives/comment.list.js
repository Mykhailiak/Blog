import module from './module';

import commentTpl from './../../themes/templates/directives/comment.list.tpl.jade';


module.directive('commentList', () => {
	return {
		restrict: 'E',
		template: commentTpl,
		scope: {
			comments: '='
		}
	}
});