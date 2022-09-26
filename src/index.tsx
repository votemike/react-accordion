import React, {ReactNode, useState} from 'react';

interface ReactAccordionProps {
  items: {
    name: string,
    heading: ReactNode,
    child: ReactNode,
    open?: boolean,
  }[]
  onClick?: (index: number) => void
}

const ReactAccordion = (props: ReactAccordionProps) => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return (
          <li key={item.name}>
            <details aria-label={item.name} open={item.open} onClick={() => props.onClick && props.onClick(index)}>
              <summary>{item.heading}</summary>
              {item.child}
            </details>
          </li>
        );
      })}
    </ul>
  );
}

export const SingleItemOpenAccordion = (props) => {
  const {items} = props;
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const revisedItems = items.map((item, index) => {
    return {
      ...item,
      open: index === openItemIndex
    };
  });
  console.log(revisedItems);

  return (
    <ReactAccordion items={revisedItems} onClick={(index) => {console.log(index);setOpenItemIndex(openItemIndex === index ? null : index)}}/>
  );
}
// What about if a clicked item is open?
// What if a user is searching the page and the accordion opens due to hidden=until-found or something

export default ReactAccordion;
