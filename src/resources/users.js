import module from './module';

module.factory('Users', ($resource, backEndUrl) => {
	return $resource(backEndUrl + '/users/:id', {
		id: '@id'
	});
});