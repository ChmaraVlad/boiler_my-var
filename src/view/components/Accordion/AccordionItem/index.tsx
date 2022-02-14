import React, { useState } from 'react';
import { StylesAccordionItem } from './styles';

type TypeAcordItem = {
    question: string;
    answer: string;
}
export const AccordionItem = ({ question,
    answer }: TypeAcordItem) => {
    const [ showItem, setShowItem ] = useState(false);

    const _handleItem = () => {
        setShowItem((prev) => !prev);
    };

    return (
        <StylesAccordionItem
            showItem = { showItem }
            onClick = { _handleItem }>
            <div className = 'accordion-question'>
                <span>{question}</span>
            </div>
            {
                showItem
                    ? (
                        <div className = 'accordion-answer'>
                            {answer}
                        </div>
                    )
                    : null
            }
        </StylesAccordionItem>
    );
};
