import module from './module';

module.factory('Markers', ($resource, backEndUrl) => {
	return $resource(`${backEndUrl}/markers/:id`, {
		id: '@id'
	});
});