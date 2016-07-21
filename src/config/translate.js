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
		WARNS: {
			REQUIRED_MESS: 'Це поле обов\'язкове',
			MIN_LENGTH: ' {{type}} має бути більше ніж {{length}} символи',
			EMAIL_MESS: 'Це поле має бути email\'ом'
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
		RECENT_POST: 'Нещодавні пости',
		POSTED_BY: 'Опубліковано',
		NAME: 'Ім\'я',
		PASSWORD: 'Пароль',
	});

	$translateProvider.preferredLanguage('ua');

});