import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactAccordion, { SingleItemOpenAccordion } from 'react-accordion';

const data = [
  {
    name: 'Privacy',
    heading: <span>Privacy</span>,
    child: <div>Privacy is <a href="https://apple.com/privacy">very</a> important to Apple.</div>
  },
  {
    name: 'A Table',
    heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio ut urna placerat tincidunt. Suspendisse vestibulum vulputate urna et egestas. Donec libero nulla, congue in purus sed, efficitur condimentum est. Duis lobortis magna lectus, ac rhoncus felis tempor ut. Nullam molestie feugiat est at dapibus.',
    child: <table><tbody><tr><td>Hello</td></tr></tbody></table>,
    open: true
  },
  {
    name: 'A Third Option',
    heading: 'A Third Option',
    child: <span>Just a third option</span>,
  },
  {
    name: 'No child',
    heading: 'No child',
  }
];

const altData = [
  {
    name: 'Privacy',
    heading: <span>Heading must be nested in an element.</span>,
    child: <div>Privacy is <a href="https://apple.com/privacy">very</a> important to Apple.</div>
  },
  {
    name: 'A Table',
    heading: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed odio ut urna placerat tincidunt. Suspendisse vestibulum vulputate urna et egestas. Donec libero nulla, congue in purus sed, efficitur condimentum est. Duis lobortis magna lectus, ac rhoncus felis tempor ut. Nullam molestie feugiat est at dapibus.</span>,
    child: <table><tbody><tr><td>Hello</td></tr></tbody></table>,
    open: true
  },
];

const DemoPage = () => {
  return (
    <>
      <h1>ReactAccordion Demo</h1>
      <h2>Basic Accordion</h2>
      <ReactAccordion items={data} />
      <h2>Accordion with zero or one expanded items at a time</h2>
      <SingleItemOpenAccordion items={data} />
      <h2>Accordion with alternate arrows</h2>
      <ReactAccordion items={altData} className="altArrows"/>
    </>
  )
}

const main = () => {
  const appNode = document.querySelector('app');
  if (!appNode) {
    console.error('Could not find the <app> element on the DOM');
    return;
  }

  const root = ReactDOM.createRoot(appNode);
  root.render(<DemoPage />);
}

document.addEventListener('DOMContentLoaded', main);
