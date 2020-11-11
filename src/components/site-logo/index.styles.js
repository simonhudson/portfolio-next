import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Logo = styled.img`
    height: auto;
    width: ${rem(40)};

    ${({ theme }) =>
        theme.media(
            'tablet-p',
            `
            width: ${rem(50)};
            `
        )};

    ${(props) =>
        props.context === 'footer' &&
        css`
            filter: grayscale(1);
            opacity: 0.2;
        `};
`;

export { Logo };
