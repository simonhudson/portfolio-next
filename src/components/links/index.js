import React from 'react';
import { List, Item, Link } from './index.styles';
import data from './data';
import VisuallyHidden from '~/components/utilities/visually-hidden';
import Icon from '~/components/utilities/icon';

const Links = (props) => {
    if (!props) return null;

    return (
        <List>
            {data.map((item, index) => (
                <Item key={index}>
                    <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon type="brand" name={item.icon} />
                        <VisuallyHidden>
                            {item.linkText}&nbsp;(opens in a new tab/window)
                        </VisuallyHidden>
                    </Link>
                </Item>
            ))}
        </List>
    );
};

export default Links;
