import { render, screen } from '@testing-library/react';
import StaticDetail from './../StaticDetail';
import { MemoryRouter } from 'react-router-dom'

test('should render StaticDetail component', () => {
    const testRoute = '/testroute'
    render(
        <MemoryRouter initialEntries={[testRoute]}>
            <StaticDetail />
        </MemoryRouter>
    );
    const staticDetailElement = screen.getByTestId('staticdetail');
    expect(staticDetailElement).toBeInTheDocument();
});