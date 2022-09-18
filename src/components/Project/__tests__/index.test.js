import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Project from '..'
import parkour from '../../../assets/projects/parkour-landing-page.png';

const project = {
  name: "Parkour",
  thumbnail: parkour,
  repo: "https://github.com/josephkurpierz/parkour",
  deployed: "https://parkour-review.herokuapp.com/",
};

afterEach(cleanup);

describe('Project is rendering',()=>{
  it('renders', () => {
    render(<Project />);
  });
});

it('matches snapshot', () => {
  const { asFragment } = render(<Project/>)
  expect(asFragment()).toMatchSnapshot();
});

it('renders', ()=>{
  render(<Project/>)
  expect(screen.getByTestId('h1tag')).toHaveTextContent('Portraits');
})