import module from './module';

module.factory('Posts', ($resource, backEndUrl) => {
	return $resource(`${backEndUrl}/posts/:id`, {
		id: '@id'
	});
});