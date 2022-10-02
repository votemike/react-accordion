import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom'

import ReactAccordion, {SingleItemOpenAccordion} from '../index';

const data = [
  {
    name: 'Privacy',
    heading: <span>Privacy</span>,
    child: <div>Privacy is very important to Apple.</div>
  },
  {
    name: 'A Picture',
    heading: 'A Picture',
    child: <img src="./images/applesOrange.jpeg" />
  }
];

test('a two item accordion renders two summaries', () => {
  const { queryAllByRole } = render(<ReactAccordion items={data} />);

  const summaries = queryAllByRole('group')

  expect(summaries.length).toBe(2);
  expect(summaries[0]).toHaveTextContent('Privacy');
  expect(summaries[1]).toHaveTextContent('A Picture');
});

test('an accordion item details has an aria-name', () => {
  const { queryAllByRole } = render(<ReactAccordion items={data} />);

  const summaries = queryAllByRole('group')

  expect(summaries[0]).toHaveAttribute('aria-label', 'Privacy');
  expect(summaries[1]).toHaveAttribute('aria-label', 'A Picture');
});

test('the open prop is passed to the item', () => {
  const { queryAllByRole } = render(<ReactAccordion items={data} />);

  const summaries = queryAllByRole('group')

  expect(summaries[0]).toHaveAttribute('aria-label', 'Privacy');
  expect(summaries[1]).toHaveAttribute('aria-label', 'A Picture');
});

test('one accordion item opens at a time', async () => {
  const {findByText, queryAllByRole} = render(<SingleItemOpenAccordion items={data}/>);

  let summaries = queryAllByRole('group')

  expect(summaries[0]).not.toHaveAttribute('open');
  expect(summaries[1]).not.toHaveAttribute('open');

  fireEvent.click(await findByText('Privacy'));

  expect(summaries[0]).toHaveAttribute('open');
  expect(summaries[1]).not.toHaveAttribute('open');

  fireEvent.click(await findByText('A Picture'));

  expect(summaries[0]).not.toHaveAttribute('open');
  expect(summaries[1]).toHaveAttribute('open');
});
