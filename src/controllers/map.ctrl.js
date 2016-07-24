import app from './../application';


app.controller('MapCtrl', ($scope, uiGmapGoogleMapApi, mapConst) => {

	$scope.map = mapConst;

	$scope.markers = [
		{
			id: 0,
			coords: {
				latitude: 49.83968,
				longitude: 24.02972
			},
			info: 'Lviv'
		},
		{
			id: 1,
			coords: {
				latitude: 50.45010,
				longitude: 30.52340
			},
			info: 'Kiev'
		}
	];

});