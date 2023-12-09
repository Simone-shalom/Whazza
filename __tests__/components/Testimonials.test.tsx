import React from 'react';
import {  render,screen } from '@testing-library/react';
import { Testimonials, Testimonialss } from '@/components/Testimonials';

describe('Testimonials', () => {
  it('renders the testimonials section with correct data', () => {
    render(<Testimonials />);

    // Check if the section header is present
    expect(screen.getByText('Testimonials')).toBeInTheDocument();

    // Check if the subheader is present
    expect(screen.getByText('Thousands of happy users, every day')).toBeInTheDocument();

    // Check if each testimonial is rendered correctly
    Testimonialss.forEach((test,index) => {
      // Check if the name, title, and description are present
      expect(screen.getByText(test.name)).toBeInTheDocument();
      expect(screen.getByText(test.title)).toBeInTheDocument();

    // Check if the image is present based on data-testid
    expect(screen.getByTestId(`testimonial-image-${index}`)).toBeInTheDocument();
    });
  });
});
