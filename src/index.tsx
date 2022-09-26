import React, { ReactNode } from 'react';

interface ReactAccordionProps {
  items: {
    name: string,
    heading: ReactNode,
    child: ReactNode,
    open?: boolean,
  }[]
}

export function ReactAccordion(props: ReactAccordionProps) {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          <details aria-label={item.name} open={item.open}>
            <summary>{item.heading}</summary>
            {item.child}
          </details>
        </li>
      ))}
    </ul>
  );
}

export default ReactAccordion;
module.exports = ReactAccordion;
