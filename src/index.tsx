import React, { ReactNode, SyntheticEvent, useState } from 'react';

interface Item {
  name: string,
  heading: ReactNode,
  child: ReactNode,
  open?: boolean,
}

interface ReactAccordionProps {
  items: Item[]
  // eslint-disable-next-line react/require-default-props
  onClick?: (event: SyntheticEvent, index: number) => void
}

export function ReactAccordion(props: ReactAccordionProps) {
  const { items, onClick } = props;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.name}>
          <details aria-label={item.name} open={item.open}>
            <summary onClick={(event: SyntheticEvent) => typeof onClick === 'function' && onClick(event, index)}>{item.heading}</summary>
            {item.child}
          </details>
        </li>
      ))}
    </ul>
  );
}

export function SingleItemOpenAccordion(props: { items: Item[] }) {
  const { items } = props;
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const handleClick = (event: SyntheticEvent, index:number) => {
    event.preventDefault();
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
