import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledIcon = styled.span`
    display: inline-block;
`;

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
