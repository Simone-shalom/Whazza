import React from 'react';
import { render } from '@testing-library/react';
import UserPoints from '@/components/UserPoints';

describe('UserPoints', () => {
  it('displays user points', () => {
    const { getByText } = render(<UserPoints userPoints={100} />);

    expect(getByText('Your points:')).toBeInTheDocument();
    expect(getByText('100')).toBeInTheDocument();
  });

  it('displays null when no user points are provided', () => {
    const { queryByText } = render(<UserPoints userPoints={null} />);

    expect(queryByText('Your points:')).toBeInTheDocument();
    expect(queryByText('null')).not.toBeInTheDocument();
  });
});
