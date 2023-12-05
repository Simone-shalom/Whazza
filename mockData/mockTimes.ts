import { Time } from "@prisma/client";

export const mockTimes: Time[] = [
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
  ];
  