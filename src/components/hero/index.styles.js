import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Wrap = styled.div`
    background-color: ${({ theme }) => theme.palette.primary.white};
    clip-path: polygon(0% 0, 430% 0%, 20% 100%, 0% 90%);
    height: ${rem(540)};
    left: 0;
    line-height: 0;
    padding: ${({ theme }) => theme.padding.xxlg} 0
        ${({ theme }) => theme.padding.default};
    position: absolute;
    top: 0;
    width: 100%;

    &::before {
        background-color: ${({ theme }) => theme.palette.primary.white};
        ${({ theme }) =>
            css`
                background-image: radial-gradient(
                        ${theme.palette.primary.a} 1px,
                        transparent 1px
                    ),
                    radial-gradient(
                        ${theme.palette.primary.a} 1px,
                        ${theme.palette.primary.white} 1px
                    );
            `};
        background-position: 0 0, 20px 20px;
        background-size: 40px 40px;
        content: '';
        height: 100%;
        left: 0;
        opacity: 0.25;
        position: absolute;
        top: 0;
        width: 100%;
    }
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
            width: 10%;
        }
    }

    ${({ theme }) =>
        theme.media(
            'tablet-l',
            `
            font-size: ${rem(28)};
            line-height: ${rem(46)};
            `
        )};
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

export { Wrap, Title, CTA };
