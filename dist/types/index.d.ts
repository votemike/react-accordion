import { ReactNode } from 'react';
interface ReactAccordionProps {
    items: {
        name: string;
        heading: ReactNode;
        child: ReactNode;
        open?: boolean;
    }[];
}
declare const ReactAccordion: (props: ReactAccordionProps) => JSX.Element;
export default ReactAccordion;
