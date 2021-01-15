import React from 'react';
import PropTypes from 'prop-types';
import VisuallyHidden from '~/components/utilities/visually-hidden';

const ExternalLink = (props) => {
    return (
        <a
            data-test="external-link"
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.children}
            <VisuallyHidden>&nbsp;(opens in a new tab/window)</VisuallyHidden>
        </a>
    );
};

ExternalLink.propTypes = {
    href: PropTypes.string.isRequired,
};

export default ExternalLink;
