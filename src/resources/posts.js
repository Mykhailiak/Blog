import module from './module';

module.factory('Posts', ($resource, backEndUrl) => {
	return $resource(`${backEndUrl}/post/:id`, {
		id: '@id'
	});
});