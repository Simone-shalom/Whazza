import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useEventsModal2 } from "@/hooks/use-events-modal2";
import { InitialModal } from "@/components/modals/EventModal2";

// Mock useRouter
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));
jest.mock("react-hot-toast", () => ({
  __esModule: true,
  default: {
    error: jest.fn(),
  },
}));

// Mock useSession
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

jest.mock("../../src/hooks/use-events-modal2", () => ({
  useEventsModal2: jest.fn(),
}));

describe("InitialModal component", () => {
  beforeEach(() => {
    // Reset mock before each test
    useEventsModal2.mockReturnValue({
      isOpen: true, // Initialize isOpen as false
      onClose: jest.fn(),
      onOpen: jest.fn(),
    });
  });

  it("renders InitialModal component correctly", () => {
    render(<InitialModal />);
    // Add your assertions here based on the rendered content of the component
    expect(screen.getByText("Create Event Form")).toBeInTheDocument();
    // Add more assertions as needed
  });
  it("should have fields for name, image, time, distance, amount, and desc", () => {
    // Arrange
    render(<InitialModal />);

    // Act
    const nameField = screen.getByLabelText("Event name");
    const timeField = screen.getByLabelText("Time MIN");
    const distanceField = screen.getByLabelText("Distance KM - optional");
    const amountField = screen.getByLabelText("Amount");
    const descField = screen.getByLabelText("Description");

    // Assert
    expect(nameField).toBeInTheDocument();
    expect(timeField).toBeInTheDocument();
    expect(distanceField).toBeInTheDocument();
    expect(amountField).toBeInTheDocument();
    expect(descField).toBeInTheDocument();
  });
  it("should not submit the form with invalid data", () => {
    // Arrange
    render(<InitialModal />);

    // Act
    const submitButton = screen.getByRole("button", { name: "Create" });
    fireEvent.click(submitButton);

    // Assert
    expect(submitButton).toBeDisabled();
  });
  // Add more tests as needed
});
