import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import mockJson from './mock_json.json';
// import mockJson2 from './mock_json_2.json';

const server = setupServer(
  rest.get(
    'https://last-airbender-api.herokuapp.com/api/v1/characters',
    (req, res, ctx) => {
      return res(ctx.json(mockJson));
    }
  )
  // rest.get('/api/v1/characters:affiliation:perPage:page', (req, res, ctx) => {
  //   const query = req.url.searchParams;
  //   const affiliation = query.get('affiliation');
  //   const perPage = query.get('perPage');
  //   const page = query.get('page');
  //   return res(ctx.json(mockJson2));
  // })
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

    const next = screen.getByRole('button', { name: 'next page' });
    const resultsPerPage = screen.getByRole('combobox', {
      name: 'results per page',
    });
    const prev = screen.getByRole('button', { name: 'previous page' });
    const affiliation = screen.getByRole('combobox', { name: 'affiliation' });

    // userEvent.click(next);
    // await waitFor(() => screen.getByText('Page 2'));

    // userEvent.selectOptions(resultsPerPage, '25');
    // return waitFor(() => screen.getByDisplayValue('25'));

    // userEvent.selectOptions(affiliation, 'Fire+Nation');
    // return waitFor(() => {
    //   screen.getByDisplayValue('Fire Nation');
    //   screen.getByText('Circus master: Fire Nation circus');
    // });
  });
});
