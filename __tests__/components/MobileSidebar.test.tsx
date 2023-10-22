
import { fireEvent, render, screen } from '@testing-library/react';
import MobileSidebar from '@/components/MobileSidebar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


jest.mock('next-auth/react', () => ({
    useSession: () => ({ data: { user: { name: 'Test User', email: 'test@example.com' } } }),
  }));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children}: any ) => children,
}));

jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }));


  describe('MobileSidebar', () => {
    test('renders MobileSidebar component', () => {
      render(<MobileSidebar />);
      const dashboardLink = screen.queryByText(/Dashboard/i);
      const eventsLink = screen.queryByText(/Events/i);
      const pricingLink = screen.queryByText(/Pricing/i);
      const simoneText = screen.queryByText(/Simone s/i);
  
      expect(dashboardLink).toBeNull();
      expect(eventsLink).toBeNull();
      expect(pricingLink).toBeNull();
      expect(simoneText).toBeNull();
  
      const menuButton = screen.getByTestId('MenuBtn');
      fireEvent.click(menuButton);
  
      const newDashboardLink = screen.getByText(/Dashboard/i);
      const newEventsLink = screen.getByText(/Events/i);
      const newPricingLink = screen.getByText(/Pricing/i);
      const newSimoneText = screen.getByText(/Simone s/i);
  
      expect(newDashboardLink).toBeInTheDocument();
      expect(newEventsLink).toBeInTheDocument();
      expect(newPricingLink).toBeInTheDocument();
      expect(newSimoneText).toBeInTheDocument();
    });
});