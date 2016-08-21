import app from './../application';


app.filter('tagsToArray', () => {
	return (value) => {
		if(angular.isString(value)) {
			return value.split(',');
		}

		return value;
	};
});