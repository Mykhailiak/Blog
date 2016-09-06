import admin from './../admin';


import adminTpl from './../../themes/templates/admin/admin.tpl.jade';
import adminWellcomeTpl from './../../themes/templates/admin/admin.wellcome.tpl.jade';
import usersTpl from './../../themes/templates/admin/users.tpl.jade';
import postsTpl from './../../themes/templates/admin/posts.tpl.jade';
import userEditTpl from './../../themes/templates/admin/user.edit.tpl.jade';
import postEditTpl from './../../themes/templates/admin/post.edit.tpl.jade';


admin.config(($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('admin', {
			url: '/',
			controller: 'AdminCtrl',
			template: adminTpl,
			abstract: true,
			data: {
				permissions: {
					only: ['AUTHORIZED_ADMIN'],
					redirectTo() {
						window.location.reload();
					}
				}
			}
		})
		.state('admin.wellcome', {
			url: '',
			controller: 'AdminWellcomeCtrl',
			template: adminWellcomeTpl,
		})
		.state('admin.users', {
			url: 'users',
			controller: 'AdminUsersCtrl',
			template: usersTpl
		})
		.state('admin.userEdit', {
			url: 'user/:id/edit',
			controller: 'AdminUserEditCtrl',
			template: userEditTpl
		})
		.state('admin.posts', {
			url: 'posts',
			controller: 'AdminPostsCtrl',
			template: postsTpl
		})
		.state('admin.postEdit', {
			url: 'post/:id/edit',
			controller: 'AdminPostEditCtrl',
			template: postEditTpl
		})
});
