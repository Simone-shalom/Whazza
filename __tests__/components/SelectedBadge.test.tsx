
import SelectedBadge from '@/components/SelectedBadge';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';


describe('SelectedBadgeComponent Exist', () => {

    const mockLocalStorage = {
        getItem: jest.fn().mockReturnValue(JSON.stringify({ name: "Badge", src: "http://example.com/badge.png" }))
      };
      Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

    it('should render the component when selectedBadge exists', () => {
        // Mock localStorage.getItem to return a selectedBadge
       
        // Render the component
        render(<SelectedBadge />);
        // Assert that the component is rendered
        expect(screen.getByText("Badge")).toBeInTheDocument();
        expect(screen.getByAltText("selected badge")).toBeInTheDocument();
      });

      it('should display the name and image of the selected badge', () => {
        // Mock localStorage.getItem to return a selectedBadge
    
        // Render the component
        render(<SelectedBadge />);
  
        // Assert that the name and image are displayed correctly
        expect(screen.getByText("Badge")).toBeInTheDocument();
        expect(screen.getByAltText("selected badge")).toBeInTheDocument();
      });
})

// describe('SelectedBadgeComponent dont exist', () => {

//     const mockLocalStorage = {
//         setItem: jest.fn().mockReturnValue(null)
//       };
//       Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });
//     it('should not render the component when selectedBadge does not exist', () => {
//       // Mock localStorage.getItem to return null

//       // Render the component
//       render(<SelectedBadge />);

//       // Assert that the component is not rendered
//       expect(screen.queryByAltText("selected badge")).not.toBeInTheDocument();
//     });
  
//     it('should not render the component when localStorage is not available', () => {
//       // Mock window object without localStorage
//     //   Object.defineProperty(window, 'localStorage', { value: { getItem: jest.fn(() => null) } });

//       // Render the component
//       render(<SelectedBadge />);

//       // Assert that the component is not rendered
//       expect(screen.queryByAltText("selected badge")).not.toBeInTheDocument();
//     });
// })

