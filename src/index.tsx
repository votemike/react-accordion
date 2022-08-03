import React, { ReactNode } from 'react';

interface ReactAccordionProps {
  items: {
    name: string,
    heading: ReactNode,
    child: ReactNode,
    open?: boolean,
  }[]
}

const ReactAccordion = (props: ReactAccordionProps) => {
  return (
    <ul>
      {props.items.map(item => {
        
        return (
          <li key={item.name}>
            <details aria-label={item.name} open={item.open}>
              <summary>{item.heading}</summary>
              {item.child}
            </details>
          </li>
        );

      })}
    </ul>
  );
}

export default ReactAccordion;
