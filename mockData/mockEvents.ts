
export const mockEvents = [
    {
      id: "1",
      name: "Sample Event 1",
      desc: "Sample Description 1",
      imageSrc: "/sample_image_1.jpg",
      time: "Sample Time 1",
      distance: "Sample Distance 1",
      amount: "Sample Amount 1",
      createdAt: new Date(),
      userId: "user_id_1",
      createdBy: "created_by_1",
      user: {
        id: "user_id_1",
        // ... other user properties
      },
      participants: ["participant_id_1", "participant_id_2"],
      leaderboard: [
        {
          // ... leaderboard properties
        },
      ],
    },
    {
      id: "2",
      name: "Sample Event 2",
      desc: "Sample Description 2",
      imageSrc: "/sample_image_2.jpg",
      time: "Sample Time 2",
      distance: "Sample Distance 2",
      amount: "Sample Amount 2",
      createdAt: new Date(),
      userId: "user_id_2",
      createdBy: "created_by_2",
      user: {
        id: "user_id_2",
        // ... other user properties
      },
      participants: ["participant_id_3", "participant_id_4"],
      leaderboard: [
        {
          // ... leaderboard properties
        },
      ],
    },
  ]; 