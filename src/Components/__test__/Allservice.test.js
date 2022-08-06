import { render, screen } from '@testing-library/react';
import Allservice from './../Product/Allservice/Allservice';

test('shoould render allservices component', () => {
    render(<Allservice />);
    const allserviceElement = screen.getByTestId('allservice');
    expect(allserviceElement).toBeInTheDocument();
});

