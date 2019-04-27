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

	comments: [
		{
			userHandle: 'user',
			screamId: 'TugDq2BM6Rphiln2IFeD',
			body: 'nice one man!',
			createAt: '2019-04-24T11:57:56.647Z'
		}
	],

	notifications: [
		{
			recipient: 'user',
			sender: 'john',
			read: 'true | false',
			screamId: 'kdjsfgdksuufhgkdsufky',
			type: 'like | comment',
			createdAt: '2019-03-15T10:59:52.798Z'
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
