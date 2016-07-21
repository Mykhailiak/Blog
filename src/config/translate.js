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
			MIN_LENGTH: 'Це поле має мати більше ніж {{length}} символи',
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

	$translateProvider.translations('en', {
		SIGN: {
			SIGN_IN: 'Sign in',
			SIGN_UP: 'Sign up'
		},
		WARNS: {
			REQUIRED_MESS: 'This field is required',
			MIN_LENGTH: 'This field must have more than {{length}} characters',
			EMAIL_MESS: 'This field should be an e-mail'
		},
		NAVIGATION: {
			HOME: 'Home',
			USERS: 'Users',
			POSTS: 'Posts',
			GOOGLE_MAPS: 'Map'
		},
		WRITE_POST: 'Write post text',
		POST: 'Post',
		USERS: 'Users',
		RECENT_POST: 'Recent posts',
		POSTED_BY: 'Posted by',
		NAME: 'Name',
		PASSWORD: 'Password',
	});

	$translateProvider.preferredLanguage('ua');

});