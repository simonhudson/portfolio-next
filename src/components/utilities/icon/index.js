import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => (
    <span
        className={`fas fa-${props.type}`}
        aria-hidden="true"
        data-test="icon"
    ></span>
);

Icon.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Icon;
