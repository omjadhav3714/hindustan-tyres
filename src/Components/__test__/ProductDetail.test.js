import { render, screen } from '@testing-library/react';
import ProductDetail from './../Product/ProductDetail';
import { BrowserRouter } from 'react-router-dom';

test('shoould render productdetails component', () => {
    render(
        <BrowserRouter>
            <ProductDetail />
        </BrowserRouter>
    );
    const allserviceElement = screen.getByTestId('productdetail');
    expect(allserviceElement).toBeInTheDocument();
})