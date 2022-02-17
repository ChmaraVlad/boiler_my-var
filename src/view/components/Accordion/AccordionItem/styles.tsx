import styled from 'styled-components';

export const StylesAccordionItem = styled.div<{showItem: boolean}>`

    .accordion-item {
        margin-bottom: 10px;

        &:hover {
            .accordion-question {
                color: #000;
            }
        }

        &.selected {
            .accordion-question {
                cursor: initial;
                color: #2b5cbe;

                &::after {
                    content: '-';
                }
            }
        }
    }
    .accordion-question {
        position: relative;
        padding: 15px 30px;
        background: #a8b4d1;
        font-size: 16px;
        color: rgba(0,0,0,0.8);
        line-height: 24px;
        cursor: pointer;
        border-radius: 4px;
        margin-bottom: 22px;
        transition: color 0.3s;

        &::after {
            content: '+';
            position: absolute;
            right: 30px;
        }
    }
    .accordion-answer {
        padding: 0 30px;
        margin: 0 0 22px;
        font-size: 16px;
        color: #000;
        display: ${({ showItem }) => showItem ? 'inline-block' : 'none'};
    }
    `;

