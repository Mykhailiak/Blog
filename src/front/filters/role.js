import app from './../application';


app.filter('role', () => {
	return (value) => {
		if(angular.isString(value)) {
			return value.split('_')[1].toLowerCase();
		}

		return value;
	};
});