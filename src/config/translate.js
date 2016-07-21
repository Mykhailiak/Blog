import app from './../application';


app.config(($translateProvider) => {

	// $translateProvider.useStaticFilesLoader({
	// 	prefix: './../libs/lang-',
	// 	suffix: '.json'
	// });

	$translateProvider.translations('ua', {
		SIGN: {
			SIGN_IN: 'Увійти',
			SIGN_UP: 'Зареєструватися'
		},
		NAVIGATION: {
			HOME: 'Дім',
			USERS: 'Користувачі',
			POSTS: 'Публікації',
			GOOGLE_MAPS: 'Мапи'
		},
		WRITE_POST: 'Введіть текст для посту',
		POST: 'Опублікувати',
		USERS: 'Користувачі',
		RECENT_POST: 'Нещодавні пости'
	});

	$translateProvider.preferredLanguage('ua');

});