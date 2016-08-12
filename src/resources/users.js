import module from './module';

module.factory('Users', ($resource, backEndUrl) => {
	return $resource(`${backEndUrl}/user/:id`, {
		id: '@id'
	}, {
		update: {
			method: 'PUT'
		}
	});
});