import { render, screen } from '@testing-library/react';
import About from './../About';
import { BrowserRouter } from 'react-router-dom';

test('should render Abouts component', () => {
    render(
        <BrowserRouter>
            <About />
        </BrowserRouter>
    );
    const aboutElement = screen.getByTestId('about');
    expect(aboutElement).toBeInTheDocument();
});