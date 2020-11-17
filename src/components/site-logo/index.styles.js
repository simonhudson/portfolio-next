import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Logo = styled.img`
    height: auto;
    transition: all 0.5s ease-in-out;
    width: ${rem(70)};

    ${(props) =>
        props.isScrolled &&
        css`
            width: ${rem(40)};
        `};

    ${(props) =>
        props.context === 'footer' &&
        css`
            filter: grayscale(1);
            opacity: 0.2;
            width: ${rem(40)};
        `};
`;

export { Logo };
