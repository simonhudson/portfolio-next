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

        ${({ theme }) =>
            theme.media(
                'tablet-l',
                `
                font-size: ${rem(38)};
                `
            )};

        &::after {
            content: '';
            display: block;
            border-bottom: 2px solid ${({ theme }) => theme.palette.primary.a};
            margin: ${({ theme }) => theme.margin.default} 0;
        }
    }

    ${({ theme }) =>
        theme.media(
            'tablet-l',
            `
            font-size: ${rem(28)};
            line-height: ${rem(46)};
            width: 66%;
            `
        )};
`;

const Shape = styled.svg`
    bottom: 0;
    height: ${rem(60)};
    position: absolute;
    width: 100%;
`;

const CTA = styled.a`
    background: ${({ theme }) => theme.palette.primary.a};
    border: 2px solid ${({ theme }) => theme.palette.primary.white};
    color: ${({ theme }) => theme.palette.primary.white};
    display: inline-block;
    font-weight: 600;
    font-size: ${rem(16)};
    padding: ${({ theme }) => theme.padding.md};
    padding-right: ${({ theme }) => theme.padding.lg};
    position: relative;
    text-decoration: none;

    &:hover,
    &:focus {
        text-decoration: underline;
    }

    &::after {
        background: transparent;
        border-right: 3px solid ${({ theme }) => theme.palette.primary.white};
        border-bottom: 3px solid ${({ theme }) => theme.palette.primary.white};
        content: '';
        display: inline-block;
        height: ${rem(8)};
        position: absolute;
        right: ${({ theme }) => theme.padding.md};
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
        width: ${rem(8)};
    }
`;

export { Wrap, Title, Shape, CTA };
