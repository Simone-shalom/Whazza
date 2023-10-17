import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BadgesCard from '@/components/BadgesCard';
import { mockUserBadges } from '../../mockData/mockUserBadges';

describe('BadgesCard', () => {
  it('displays no badges message when userBadges is empty', () => {
    const { getByText } = render(<BadgesCard userBadges={[]} />);

    expect(getByText('no badges yet, collect one')).toBeInTheDocument();
  });

  it('displays badges when userBadges is not empty', () => {
    const userBadges = [
      { id: 1, name: 'Badge 1', src: 'badge1.jpg' },
      { id: 2, name: 'Badge 2', src: 'badge2.jpg' },
    ];
    const { getByText, getByAltText } = render(<BadgesCard userBadges={mockUserBadges} />);

    expect(getByText('Your badges')).toBeInTheDocument();
    expect(getByText('Sample Badge 1')).toBeInTheDocument();
    expect(getByAltText('badge')).toBeInTheDocument();
  });
});
