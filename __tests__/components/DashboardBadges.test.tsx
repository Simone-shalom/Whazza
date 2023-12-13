import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DashboardBadges } from "@/components/DashboardBadges";

// Mock the next-auth/react module
jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: { user: { name: "Test User", email: "test@example.com" } },
  }),
}));

describe("DashboardBadges component", () => {
  it("renders the component properly with badges", () => {
    const props = {
      extendedBadges: [
        {
          id: "1",
          userId: "userId",
          badgeId: "badgeId",
          name: "Badge Name 1",
          src: "/badge-image-1.jpg",
          points: 50,
        },
        {
          id: "2",
          userId: "userId",
          badgeId: "badgeId2",
          name: "Badge Name 2",
          src: "/badge-image-2.jpg",
          points: 10,
        },
        // Add more badges as needed for testing variations
      ],
    };

    render(<DashboardBadges {...props} />);

    // Check if the component renders properly based on your logic
    expect(screen.getByText("Badge Name 1")).toBeInTheDocument();
    // Add more assertions based on your component's structure
  });

  it("renders the component properly without badges", () => {
    const props = {
      extendedBadges: [],
    };

    render(<DashboardBadges {...props} />);

    // Check if the component renders properly based on your logic
    expect(screen.getByText("no badges yet, collect one")).toBeInTheDocument();
    // Add more assertions based on your component's structure
  });
});
