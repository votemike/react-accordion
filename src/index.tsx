import React, { ReactNode, SyntheticEvent, useState } from 'react';

interface Item {
  name: string,
  heading: ReactNode,
  child?: ReactNode,
  open?: boolean,
}

interface ReactAccordionProps {
  items: Item[]
  // eslint-disable-next-line react/require-default-props
  onClick?: (event: SyntheticEvent, index: number) => void,
  // eslint-disable-next-line react/require-default-props
  className?: string,
}

export function ReactAccordion(props: ReactAccordionProps) {
  const { className, items, onClick } = props;

  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={item.name}>
          {item.child
            ? (
              <details aria-label={item.name} open={item.open}>
                <summary
                  onClick={(event: SyntheticEvent) => typeof onClick === 'function' && onClick(event, index)}
                >
                  {item.heading}
                </summary>
                {item.child}
              </details>
            ) : (<summary>{item.heading}</summary>)}
        </li>
      ))}
    </ul>
  );
}

export function SingleItemOpenAccordion(props: { items: Item[] }) {
  const { items } = props;

  let initialOpenItem = null;
  const reversedOpenItemIndex = items.slice().reverse().findIndex((item) => item.open);
  if (reversedOpenItemIndex !== -1) {
    initialOpenItem = items.length - reversedOpenItemIndex - 1;
  }
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(initialOpenItem);

  const handleClick = (event: SyntheticEvent, index: number) => {
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
