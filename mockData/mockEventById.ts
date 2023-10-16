export const mockEventById = {
    event: {
      id: '1',
      name: 'Sample Event',
      desc: 'Sample Event Description',
      imageSrc: '/sampleImageUrl',
      time: null,
      distance: null,
      amount: null,
      createdAt: new Date(),
      userId: 'user1',
      createdBy: null,
      participants: ['user1', 'user2', 'user3']
    },
    leaderboard: {
      id: '1',
      eventId: '1'
    },
    times: [
      {
        id: '1',
        userId: 'user1',
        time: '22:34',
        distance: null,
        amount: null,
        leaderboardId: '1',
        username: null
      },
      {
        id: '2',
        userId: 'user2',
        time: '25:34',
        distance: null,
        amount: null,
        leaderboardId: '1',
        username: null
      },
      // Add more mock time data as needed
    ],
    participants: 10,
    eventPoints: 100,
    userPlace: 1,
    currentUser: {
      id: 'user1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      emailVerified: null,
      image: '/sampleImageUrl',
      stripe_customer_id: null,
      stripe_subscription_item: null,
      api_key: null
    }
  };