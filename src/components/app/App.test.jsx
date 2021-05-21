import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('api url', (req, res, ctx) => {
    return res(ctx.json({ some: 'json' }));
  })
);

describe('App component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders App', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    screen.getByText('Loading...');

    await screen.findByText('Analay: Unnamed team');
  });
});
