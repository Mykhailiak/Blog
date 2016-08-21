import module from './../module';


module.filter('role', () => {
	return (value) => {
		if(angular.isString(value)) {
			return value.split('_')[1].toLowerCase();
		}

		return value;
	};
});