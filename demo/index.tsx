import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactAccordion from '../src';

const data = [
  {
    name: 'Privacy',
    heading: <span>Privacy</span>,
    child: <div>Privacy is <a href="https://apple.com/privacy">very</a> important to Apple.</div>
  },
  {
    name: 'A Picture',
    heading: 'A Picture',
    child: <img src="./images/applesOrange.jpeg" />,
    open: true
  }
];

const DemoPage = () => {
  return (
    <ReactAccordion items={data}/>
  )
}

const main = () => {
  const appNode = document.querySelector('app');
  const root = ReactDOM.createRoot(appNode);
  root.render(<DemoPage />);
}

document.addEventListener('DOMContentLoaded', main);
