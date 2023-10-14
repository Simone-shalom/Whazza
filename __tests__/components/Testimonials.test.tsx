    
import { Testimonials } from '@/components/Testimonials';
import { render, screen } from '@testing-library/react'

describe("Testimonials", () => {
  // Renders the Testimonials section with a title and subtitle
  it('should render the Testimonials section with a title and subtitle', () => {
    render(<Testimonials />);
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByText('Thousands of happy users, every day')).toBeInTheDocument();
  });
})
