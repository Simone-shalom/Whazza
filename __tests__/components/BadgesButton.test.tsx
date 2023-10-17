import BadgesButton from '@/components/BadgesButton';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const mockUseBadgesModal = jest.fn();

jest.mock('../../src/hooks/use-badges-modal', () => ({
  __esModule: true,
  useBadgesModal: () => ({
    onOpen: mockUseBadgesModal,
  }),
}));

jest.mock('react-hot-toast', () => ({
  __esModule: true,
  default: {
    error: jest.fn(),
  },
}));

describe("BadgesButton", () => {
  
  it('opens badges modal on button click with subscription', () => {

    render(<BadgesButton sub />);
    const button = screen.getByRole('button', { name: /Choose badge/i });

    fireEvent.click(button);

    expect(mockUseBadgesModal).toHaveBeenCalled();
  });

    it('should show error toast when sub is false', () => {
        const mockToastError = jest.spyOn(toast, 'error');
        const { getByText } = render(<BadgesButton sub={false} />);
        fireEvent.click(getByText('Choose badge'));
    
        expect(mockToastError).toHaveBeenCalledWith('Only for subscribed users');
      });

})