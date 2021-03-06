import React from 'react';
import { List, Item, Link, Text } from './index.styles';
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
                        as={'a'}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`button-brand--${item.type}`}
                    >
                        <Icon type="brand" name={item.icon} />
                        <Text>
                            <VisuallyHidden>Visit my&nbsp;</VisuallyHidden>
                            {item.linkText}
                            <VisuallyHidden>&nbsp;profile</VisuallyHidden>
                        </Text>
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
