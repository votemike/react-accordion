import { ReactNode } from 'react';
interface ReactAccordionProps {
    items: {
        name: string;
        heading: ReactNode;
        child: ReactNode;
        open?: boolean;
    }[];
}
export declare function ReactAccordion(props: ReactAccordionProps): JSX.Element;
export default ReactAccordion;
