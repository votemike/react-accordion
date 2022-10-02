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
    heading: 'A Table',
    child: <table><tbody><tr><td>Hello</td></tr></tbody></table>,
    open: true
  },
  {
    name: 'A Third Option',
    heading: 'A Third Option',
    child: <span>Just a third option</span>,
  }
];

const DemoPage = () => {
  return (
    <>
      <ReactAccordion items={data} />
      <SingleItemOpenAccordion items={data} />
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
