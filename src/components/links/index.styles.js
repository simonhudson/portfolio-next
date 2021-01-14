import styled from 'styled-components';
import { rem } from 'polished';
import Icon from '~/components/utilities/icon';

const List = styled.ul`
    display: flex;
    list-style: none;
`;

const Item = styled.li`
    &:not(:last-of-type) {
        margin-right: ${rem(20)};
    }
`;

const Link = styled.a``;

const ItemIcon = styled(Icon)``;

export { List, Item, Link, ItemIcon };
