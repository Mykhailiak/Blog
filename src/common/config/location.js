import module from './../module';


module.config(($locationProvider) => {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});