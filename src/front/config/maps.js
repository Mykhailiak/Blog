import app from './../application';


app.config((uiGmapGoogleMapApiProvider) => {
	uiGmapGoogleMapApiProvider.configure({
		v: '3.24.12',
		key: 'AIzaSyDJpF30TMO51soggjckhvyzsOy07h2noCE'
	});
});