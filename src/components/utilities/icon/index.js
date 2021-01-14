import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
    const typeMapping = {
        solid: 'fas',
        brand: 'fab',
    };
    return (
        <span
            className={`${typeMapping[props.type]} fa-${props.name}`}
            aria-hidden="true"
            data-test="icon"
        ></span>
    );
};

Icon.propTypes = {
    type: PropTypes.oneOf(['solid', 'brand']).isRequired,
    name: PropTypes.string.isRequired,
};

export default Icon;
