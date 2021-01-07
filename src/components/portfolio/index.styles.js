import styled from 'styled-components';
import { rem } from 'polished';

const PortfolioWrap = styled.div`
    padding-top: ${rem(440)};

    a {
        color: ${({ theme }) => theme.palette.primary.brand};
        font-weight: 600;
        text-decoration: none;
    }
`;

export { PortfolioWrap };
