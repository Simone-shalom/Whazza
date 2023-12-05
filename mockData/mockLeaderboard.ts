export const mockLeaderboard = [
  {
    times: [
      {
        id: '1',
        userId: 'user1',
        time: '1:30',
        distance: '10 km',
        amount: '50',
        leaderboardId: 'leaderboard1',
        username: 'JohnDoe',
      },
      {
        id: '2',
        userId: 'user2',
        time: '1:45',
        distance: '8 km',
        amount: '40',
        leaderboardId: 'leaderboard1',
        username: 'JaneDoe',
      },
      // Add more time entries as needed
    ],
    id: 'leaderboard1',
    eventId: 'event1',
  },
  {
    times: [
      {
        id: '3',
        userId: 'user3',
        time: '2:00',
        distance: '5 km',
        amount: '30',
        leaderboardId: 'leaderboard2',
        username: 'BobSmith',
      },
      // Add more time entries as needed
    ],
    id: 'leaderboard2',
    eventId: 'event2',
  },
  // Add more leaderboard entries as needed
];
