
import Navbar from '@/components/Navbar';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

describe('Navbar component', () => {
    it('renders the logo', () => {
      render(<Navbar />);
      const logoElement = screen.getByText('Sportify');
      expect(logoElement).toBeInTheDocument();
    });
  
    it('renders navigation links', () => {
      render(<Navbar />);
      const eventsLink = screen.getByText(/Events/);
      const pricingLink = screen.getByText(/Pricing/);
      const dashboardLink = screen.getByText(/Dashboard/);
      expect(eventsLink).toBeInTheDocument();
      expect(pricingLink).toBeInTheDocument();
      expect(dashboardLink).toBeInTheDocument();
    });
  
    it('renders the selected badge if session exists', () => {
        // Mock useSession to return a session
        jest.mock('next-auth/react', () => ({
          useSession: () => ({ data: { user: { name: 'Test User', email: 'test@example.com' } } }),
        }));
    
        render(<Navbar />);
    
        // Assert that the SelectedBadge component is rendered
        expect(screen.getByTestId('selected-badge')).toBeInTheDocument();
      });
    
      it('displays the background color when scrolled', () => {
        render(<Navbar />);
    
        // Simulate window scroll
        global.scrollY = 100;
        fireEvent.scroll(window);
    
        // Assert that the background color changes
        const navBarElement = screen.getByTestId('navbar-container');
        expect(navBarElement).toHaveStyle('background-color: #purple-100');
      });
  
    // it('navigates to the correct links when clicked', async () => {

    //   render(<Navbar />);
    //   const eventsLink = screen.getByText(/Events/);
    //   const pricingLink = screen.getByText(/Pricing/);
    //   const dashboardLink = screen.getByText(/Dashboard/);
    //   // Modify the expectation based on the expected behavior of the dashboard link
    //   fireEvent.click(eventsLink);
    //   await waitFor(() => {
    //     expect(window.location.pathname).toBe('/events');
    // });
  
  
    // Add more tests as necessary for the specific functionalities of your Navbar component.
  });
  