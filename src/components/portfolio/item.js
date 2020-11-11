import React from 'react';
import { Wrap, Img, Text, Title } from './item.styles';

const generateCopyMarkup = (props) => {
    if (props.omitText) return null;
    let paragraphs = [];
    props.text.map((item, index) => paragraphs.push(`<p>${item}</p>`));
    return paragraphs.join(' ');
};

const Item = (props) => {
    if (props.omit) return null;
    return (
        <Wrap data-test="portfolio-item">
            <Img />
            <Text>
                <Title data-test="portfolio-item__title">{props.title}</Title>
                <div
                    data-test="portfolio-item__text"
                    dangerouslySetInnerHTML={{
                        __html: generateCopyMarkup(props),
                    }}
                ></div>
            </Text>
        </Wrap>
    );
};

export default Item;
