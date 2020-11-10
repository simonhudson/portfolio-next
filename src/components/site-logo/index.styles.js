import styled from 'styled-components';
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
`;

export { Logo };
