import app from './../application';


app.factory('httpRequestInterceptor', () => {
	return {
		request(config) {
			let apiKey = localStorage.getItem('apiKey');

			if(apiKey) {
				config.headers['apiKey'] = apiKey;
			}

			return config;
		}
	};
});