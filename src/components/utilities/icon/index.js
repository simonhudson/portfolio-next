import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Icon = (props) => {
    const typeMapping = {
        solid: 'fas',
        brand: 'fab',
    };

    const StyledIcon = styled.span`
        color: inherit;
        font-size: inherit;
    `;

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
