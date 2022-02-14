import React from 'react';
import { AccordionItem } from './AccordionItem';
import { AccordionTitle } from './AccordionTitle';
import { StylesAccordion } from './styles';

// Data
import dbA from './sourceAccordion.json';


export const Accordion = () => {
    const AccordionItemJsx = dbA.map((item, index) => {
        return (
            <div key = { index }>
                <AccordionItem
                    { ...item }
                />
            </div>
        );
    });

    return (
        <StylesAccordion>
            <AccordionTitle />
            {AccordionItemJsx}
        </StylesAccordion>
    );
};

