import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './index.styles';

const Icon = (props) => {
    const typeMapping = {
        solid: 'fas',
        brand: 'fab',
    };

    return (
        <StyledIcon
            className={`${typeMapping[props.type]} fa-${props.name}`}
            aria-hidden="true"
            data-test="icon"
        ></StyledIcon>
    );
};

Icon.propTypes = {
    type: PropTypes.oneOf(['solid', 'brand']).isRequired,
    name: PropTypes.string.isRequired,
};

export default Icon;
