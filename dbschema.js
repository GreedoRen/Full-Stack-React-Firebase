let db = {
	screams: [
		{
			userHandle: 'user',
			body: 'this is a scream',
			createdAt: '2019-04-24T11:57:56.647Z',
			likeCount: 5,
			commentCount: 2
		}
	],

	users: [
		{
			userID: 'fwjRjagTl4XsZIVW91SOLG7esrs2',
			email: 'user@mail.com',
			handle: 'user',
			createAt: '2019-04-24T14:40:54.101Z',
			imageUrl: '',
			bio: 'Hello, my name is user',
			website: 'https://user.com',
			location: 'London, UK'
		}
	]
};

const userDetails = {
	credentials: {
		userId: 'fwjRjagTl4XsZIVW91SOLG7esrs2',
		email: 'user@email.com',
		handle: 'user',
		createAt: '2019-04-24T14:40:54.101Z',
		imageUrl: '',
		bio: 'Hello, my name is user 2',
		website: 'https://user2.com',
		location: 'London2, UK'
	},
	likes: [
		{
			userHandle: 'user',
			screamId: '6es6CGgsSbsEu53EO8BJ'
		},
		{
			userHandle: 'user',
			screamId: 'GIGMYbmjupcX0CboVrVd'
		}
	]
};
