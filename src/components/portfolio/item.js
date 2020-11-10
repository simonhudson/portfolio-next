import React from 'react';
import { Wrap } from './item.styles';

const Item = (props) => {
    return (
        <Wrap>
            <p>{props.title}</p>
        </Wrap>
    );
};

export default Item;
