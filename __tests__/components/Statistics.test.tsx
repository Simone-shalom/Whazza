import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Statistics, StatisticsCard } from "@/components/Statistics";

// Define a custom type that satisfies the requirements of DOMRectReadOnly
type CustomDOMRect = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
  toJSON: () => Record<string, number>;
};

// Mock IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  observe() {}
  disconnect() {}

  // These properties are required by the IntersectionObserver interface
  root: Element | null = null;
  rootMargin: string = "";
  //@ts-ignore
  thresholds: number | number[] | undefined = undefined as any; // Type assertion
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  unobserve(target: Element): void {}
}

beforeAll(() => {
  // Provide the mock to the global object
  global.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterAll(() => {
  // Clean up the mock after all tests
  //@ts-ignore
  global.IntersectionObserver = undefined; // Set to undefined instead of using delete
});

describe("Statistics", () => {
  it("renders the statistics section with correct data", () => {
    render(<Statistics />);

    // Check if the first statistics card is rendered correctly
    expect(screen.getByText("Events created")).toBeInTheDocument();

    // Check if the second statistics card is rendered correctly
    expect(screen.getByText("Users joined")).toBeInTheDocument();

    // Check if the third statistics card is rendered correctly
    expect(screen.getByText("Points given")).toBeInTheDocument();
  });

  it("renders the statistics card with correct data", async () => {
    render(<StatisticsCard value={56} duration={5} text="Events created" />);

    // Check if the text is rendered correctly
    expect(screen.getByText("Events created")).toBeInTheDocument();
    // Check if value is visible
    await waitFor(() => {
      expect(screen.getByText("56")).toBeInTheDocument();
    });
  });
});
