import React from 'react';
import { render, screen } from '@testing-library/react';
import { HowItWorks, Steps } from '@/components/HowItWorks';

describe('HowItWorks', () => {
  it('renders the HowItWorks section with correct data', () => {
    render(<HowItWorks />);

    // Check if the section header is present
    expect(screen.getByText('How it works')).toBeInTheDocument();

    // Check if the subheader is present
    expect(screen.getByText('See the proccess step by step')).toBeInTheDocument();

    // Check if each step is rendered correctly
    Steps.forEach((step) => {
      // Check if the step number, name, and text are present
      expect(screen.getByText(`Step ${step.number}`)).toBeInTheDocument();
      expect(screen.getByText(step.name)).toBeInTheDocument();
      expect(screen.getByText(step.text)).toBeInTheDocument();
    });
  });
});
