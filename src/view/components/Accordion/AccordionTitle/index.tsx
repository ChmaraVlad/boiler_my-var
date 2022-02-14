import React from 'react';

type TypePropsTitle = {
    title: string;
}

export const AccordionTitle = (props: TypePropsTitle) => {
    return <h1>{props.title}</h1>;
};

AccordionTitle.defaultProps = {
    title: 'Accordion',
};
