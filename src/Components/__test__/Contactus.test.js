import { render, screen } from '@testing-library/react';
import Contactus from './../Contactus';

test('should render Contactus component', () => {
    render(<Contactus />);
    const ContactusElement = screen.getByTestId('contactus');
    expect(ContactusElement).toBeInTheDocument();
});