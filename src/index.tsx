import React, { ReactNode, useState } from 'react';

interface ReactAccordionProps {
  items: {
    name: string,
    heading: ReactNode,
    child: ReactNode,
    open?: boolean,
  }[]
  onClick?: (index: number) => void
}

export function ReactAccordion(props: ReactAccordionProps) {
  const { items } = props;

  const handleClick = (index) => () => props.onClick && props.onClick(index);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.name}>
          <details aria-label={item.name} open={item.open} onClick={handleClick(index)}>
            <summary>{item.heading}</summary>
            {item.child}
          </details>
        </li>
      ))}
    </ul>
  );
}

export function SingleItemOpenAccordion(props) {
  const { items } = props;
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const handleClick = (index) => {
    console.log(index);
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  const revisedItems = items.map((item, index) => ({
    ...item,
    open: index === openItemIndex,
  }));

  return (
    <ReactAccordion items={revisedItems} onClick={handleClick} />
  );
}

export default ReactAccordion;
module.exports = ReactAccordion;
module.exports.SingleItemOpenAccordion = SingleItemOpenAccordion;
