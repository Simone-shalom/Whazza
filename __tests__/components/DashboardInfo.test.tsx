import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useSession } from "next-auth/react";
import Draggable from "react-draggable";
import { DashboardInfo } from "@/components/DashboardInfo";

// Mock the useSession hook
jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: { user: { name: "Test User", email: "test@example.com" } },
  }),
}));
describe("DashboardInfo component", () => {
  it("renders the DashboardInfo component correctly", () => {
    render(<DashboardInfo />);

    // Check if the component renders properly
    expect(screen.getByText("Hello Test User")).toBeInTheDocument();
  });

  it("allows dragging of the component", () => {
    render(<DashboardInfo />);

    // Check if the Draggable component is rendered
    expect(screen.getByTestId("draggable-component")).toBeInTheDocument();

    // You can simulate dragging if needed using fireEvent
    fireEvent.mouseDown(screen.getByTestId("draggable-component"));
    fireEvent.mouseMove(screen.getByTestId("draggable-component"), {
      clientX: 100,
      clientY: 100,
    });
    fireEvent.mouseUp(screen.getByTestId("draggable-component"));
  });
});
