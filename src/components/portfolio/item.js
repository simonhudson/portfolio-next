import React from 'react';
import { Wrap, Img, Text, Title } from './item.styles';
import PropTypes from 'prop-types';
import VisuallyHidden from '~/components/utilities/visually-hidden';
import Icon from '~/components/utilities/icon';

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
            <Img alt={`${props.title} screen shot`} />
            <Text>
                <Title data-test="portfolio-item__title">{props.title}</Title>
                <div
                    data-test="portfolio-item__text"
                    dangerouslySetInnerHTML={{
                        __html: generateCopyMarkup(props),
                    }}
                ></div>
                {props.url && (
                    <p>
                        <a
                            data-test="portfolio-item__link"
                            href={props.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View <VisuallyHidden>{props.title} </VisuallyHidden>
                            project{' '}
                            <VisuallyHidden>
                                (opens in new tab/window)
                            </VisuallyHidden>
                            <Icon type="external-link-alt" />
                        </a>
                    </p>
                )}
            </Text>
        </Wrap>
    );
};

Item.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string,
    madeWith: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    omit: PropTypes.bool,
};

export default Item;
