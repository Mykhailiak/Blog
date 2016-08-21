import module from './../module';


module.filter('tagsToArray', () => {
	return (value) => {
		if(angular.isString(value)) {
			return value.split(',');
		}

		return value;
	};
});