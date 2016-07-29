import app from './../application';


app.controller('MapCtrl', ($scope, uiGmapGoogleMapApi, mapConst, Markers) => {

	$scope.map = mapConst;

	Markers.query().$promise.then((data) => {
		$scope.markers = data;
	}).catch((err) => {
		console.error(err);
	});

});