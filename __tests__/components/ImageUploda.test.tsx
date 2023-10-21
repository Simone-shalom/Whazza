import { ImageUpload } from '@/components/ImageUpload';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }));

jest.mock('next-auth/react', () => ({
    useSession: () => ({ data: { user: { name: 'Test User', email: 'test@example.com' } } }),
  }));
  
  describe('ImageUpload', () => {
    it('renders with the provided props', () => {
      const mockOnChange = jest.fn();
      const mockValue = ''; // No value initially
      const mockDisabled = false;
  
      render(
        <ImageUpload value={mockValue} onChange={mockOnChange} disabled={mockDisabled} />
      );
    });
  });