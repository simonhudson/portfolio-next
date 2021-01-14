import React from 'react';
import { List, Item, ItemIcon } from './index.styles';
import data from './data';

const Links = (props) => {
    if (!props) return null;

    return (
        <List>
            {data.map((item, index) => (
                <Item key={index}>
                    <ItemIcon type="brand" name={item.icon} />
                </Item>
            ))}
        </List>
    );
};

export default Links;
