import styled from 'styled-components';
import { rem } from 'polished';

const Wrap = styled.div`
    background: ${({ theme }) => theme.palette.primary.white};
    height: ${rem(440)};
    line-height: 0;
    padding: ${({ theme }) => theme.padding.md} 0;
    position: relative;
`;

const Title = styled.h1`
    font-size: ${rem(20)};
    line-height: ${rem(38)};
    margin-bottom: ${({ theme }) => theme.margin.md};

    span:first-of-type {
        display: block;
        font-size: ${rem(24)};
        font-weight: 700;

        &::after {
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
    height: ${rem(60)};
    position: absolute;
    width: 100%;
`;

const CTA = styled.a`
    background: ${({ theme }) => theme.palette.primary.white};
    border: 2px solid ${({ theme }) => theme.palette.primary.b};
    color: ${({ theme }) => theme.palette.primary.b};
    display: inline-block;
    font-weight: 600;
    padding: ${({ theme }) => theme.padding.md};
`;

export { Wrap, Title, Shape, CTA };
