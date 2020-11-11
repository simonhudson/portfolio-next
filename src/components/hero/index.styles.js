import styled from 'styled-components';
import { rem } from 'polished';

const Wrap = styled.div`
    background: ${({ theme }) => theme.palette.primary.white};
    height: ${rem(340)};
    line-height: 0;
    padding: ${({ theme }) => theme.padding.md} 0;
    position: relative;
`;

const Title = styled.h1`
    font-size: ${rem(20)};
    line-height: ${rem(38)};

    span:first-of-type {
        display: block;
        font-size: ${rem(24)};
        font-weight: 600;

        &:after {
            content: '';
            display: block;
            border-bottom: 2px solid ${({ theme }) => theme.palette.primary.b};
            margin: ${({ theme }) => theme.margin.default} 0;
            width: 10%;
        }
    }
`;

const Shape = styled.svg`
    bottom: 0;
    height: 10vw;
    position: absolute;
    width: 100%;
`;

export { Wrap, Title, Shape };
