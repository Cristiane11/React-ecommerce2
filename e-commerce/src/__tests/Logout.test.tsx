import { render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Logout from '../pages/Logout';

// Mock Firebase auth
vi.mock('../lib/firebase/firebase', () => ({
    auth: {}
}));

vi.mock('firebase/auth', () => ({
    signOut: vi.fn()
}));

describe('Logout Component', () => {
    test('renders logout component', () => {
        const { getByText } = render(<Logout />);
        expect(getByText('Logout')).toBeInTheDocument();
    });

    test('matches snapshot', () => {
        const { asFragment } = render(<Logout />);
        expect(asFragment()).toMatchSnapshot();
    });
}); 