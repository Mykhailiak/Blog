import module from './module';

module.factory('Comments', ($resource, backEndUrl) => {
	return $resource(`${backEndUrl}/comment/:id`, {
		id: '@id'
	});
});
