import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DashboardLinks } from "@/components/DashboardLinks";
import { useRouter } from "next/navigation";

// Mock the next-auth/react module
jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: { user: { name: "Test User", email: "test@example.com" } },
  }),
}));

//mock nextRouter
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("DashboardLinks component", () => {
  it("renders the component properly when user has a subscription", () => {
    const props = {
      hasSub: true,
      customerPortal: "your-customer-portal-link",
      checkoutLink: null,
      totalPoints: 100,
      extendedBadges: [],
      badges: [],
    };

    render(<DashboardLinks {...props} />);

    // Check if the component renders properly based on your logic
    expect(screen.getByText("You have a subscription!")).toBeInTheDocument();
    // Add more assertions based on your component's structure
  });

  it("renders the component properly when user is on free mode", () => {
    const props = {
      hasSub: false,
      customerPortal: undefined,
      checkoutLink: "your-checkout-link",
      totalPoints: 150,
      extendedBadges: [],
      badges: [],
    };

    render(<DashboardLinks {...props} />);

    // Check if the component renders properly based on your logic
    expect(screen.getByText("You are on free mode!")).toBeInTheDocument();
    // Add more assertions based on your component's structure
  });
});
