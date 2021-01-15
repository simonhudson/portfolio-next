import styled from 'styled-components';
import { rem } from 'polished';

const List = styled.ul`
    display: flex;
    justify-content: flex-start;
    list-style: none;
`;

const Item = styled.li`
    &:not(:last-of-type) {
        margin-right: ${rem(40)};
    }
`;

const Link = styled.a`
    color: ${({ theme }) => theme.palette.primary.brand};
    font-size: ${rem(46)};
`;

export { List, Item, Link };
