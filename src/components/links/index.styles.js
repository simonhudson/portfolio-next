import styled from 'styled-components';
import { rem } from 'polished';
import { Button } from '~/components/utilities/button/index.styles';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;

    ${({ theme }) =>
        theme.media(
            'tablet-p',
            `
            flex-direction: row;
            `
        )};
`;

const Item = styled.li`
    &:not(:last-of-type) {
        margin: 0 0 ${({ theme }) => theme.margin.md} 0;
    }

    ${({ theme }) =>
        theme.media(
            'tablet-p',
            `
            flex: 1;
    
            &:not(:last-of-type) {
                margin: 0 ${theme.margin.md} 0 0;
            }
            `
        )};
`;

const Link = styled(Button)`
    justify-content: center;

    span[class*='fa-'] {
        font-size: ${rem(25)};

        &::before {
            text-shadow: 1px 1px
                ${({ theme }) => theme.palette.primary.bodyText};
        }
    }
`;

const Text = styled.span`
    font-weight: 600;
    margin-left: ${rem(16)};
    text-shadow: 1px 1px ${({ theme }) => theme.palette.primary.bodyText};
`;

export { List, Item, Link, Text };
