import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react'; // Replace with the actual path to your PrizesButton component
import PrizesButton from '@/components/PrizesButton';

jest.mock('react-hot-toast', () => ({
  __esModule: true,
  default: {
    error: jest.fn(),
  },
}));

const mockUsePrizesModal = jest.fn();

jest.mock('../../src/hooks/use-prizes-modal', () => ({
  __esModule: true,
  usePrizesModal: () => ({
    onOpen: mockUsePrizesModal,
  }),
}));

describe('dont open prizes modal if there is no sub', () => {
  it('it ', async () => {
    render(<PrizesButton  />);
    const button = screen.getByRole('button', { name: /Collect prizes/i });

    fireEvent.click(button);

    expect(mockUsePrizesModal).not.toHaveBeenCalled();
  });

  it('opens prizes modal on button click with subscription', () => {
    render(<PrizesButton sub />);
    const button = screen.getByRole('button', { name: /Collect prizes/i });

    fireEvent.click(button);

    expect(mockUsePrizesModal).toHaveBeenCalled();
  });
});
