import { DashboardHero } from "@/components/DashboardHero";
import { render, screen } from "@testing-library/react";
// Mock the useSession hook
jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: { user: { name: "Test User" } },
  }),
}));

describe("DashboardHero component", () => {
  it("renders the DashboardHero component correctly", () => {
    render(<DashboardHero userPoints={100} />);

    // Check if the text is rendered
    expect(screen.getByText("Your Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Hello Test User")).toBeInTheDocument();
    expect(screen.getByText("Drag it as you want")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });
});
