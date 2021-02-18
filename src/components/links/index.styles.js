import styled from 'styled-components';
import { rem } from 'polished';
import { Button } from '~/components/utilities/button/index.styles';

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

const Item = styled.li`
    /* &:not(:last-of-type) {
        margin-right: ${rem(80)};
    } */
`;

const Link = styled(Button)``;

const Text = styled.span`
    font-weight: 400;
    margin-left: ${rem(16)};
`;

export { List, Item, Link, Text };
