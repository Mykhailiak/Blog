import app from './../application';


app.controller('MapCtrl', ($scope, uiGmapGoogleMapApi) => {
	uiGmapGoogleMapApi.then(function(maps) {
		console.log("Google maps api loaded");
	});

	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
});