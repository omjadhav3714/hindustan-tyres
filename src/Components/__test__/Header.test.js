import { render, screen } from '@testing-library/react';
import Header from './../Header';

test('should render Header component', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
});