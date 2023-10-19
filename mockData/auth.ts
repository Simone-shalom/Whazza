import * as nextAuth from 'next-auth/react';

// Mock the useSession hook
// Mock the useSession hook
//working next-auth mock by now 
jest.mock('next-auth/react', () => ({
  useSession: () => ({ data: { user: { name: 'Test User', email: 'test@example.com' } } }),
}));