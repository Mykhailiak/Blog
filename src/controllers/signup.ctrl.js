import app from './../application';


app.controller('SignUpCtrl', ($scope, Users, roles) => {
	$scope.rolesList = roles;
});