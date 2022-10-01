import React, {ReactNode, SyntheticEvent, useState} from 'react';

interface ReactAccordionProps {
  items: {
    name: string,
    heading: ReactNode,
    child: ReactNode,
    open?: boolean,
  }[]
  onClick?: (event: SyntheticEvent, index: number) => void
}

export function ReactAccordion(props: ReactAccordionProps) {
  const { items } = props;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.name}>
          <details aria-label={item.name} open={item.open}>
            <summary onClick={(event: SyntheticEvent) => {props.onClick && props.onClick(event, index)}}>{item.heading}</summary>
            {item.child}
          </details>
        </li>
      ))}
    </ul>
  );
}

export function SingleItemOpenAccordion(props: ReactAccordionProps) {
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
