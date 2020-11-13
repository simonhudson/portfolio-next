import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Wrapper = styled.div`
    background: ${({ theme }) => theme.palette.primary.white};
    border-top: ${rem(10)} solid ${({ theme }) => theme.palette.primary.a};
    padding: ${rem(10)} 0;
    position: sticky;
    top: -1px;
    transition: box-shadow 0.5s ease-in-out;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndex.indexOf('site-header')};

    ${({ theme }) =>
        theme.media(
            'tablet-p',
            `
			    padding: ${rem(20)} 0;
			    `
        )};

    ${(props) =>
        props.isScrolled &&
        css`
            box-shadow: 0 0 5px #bbb;
        `};
`;

const InnerWrap = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
`;

const Strapline = styled.p`
    color: ${({ theme }) => theme.palette.primary.bodyText};
    font-size: ${rem(16)};
    margin: 0;
    padding-left: ${rem(10)};
    text-transform: uppercase;

    span:first-of-type {
        display: none;

        ${({ theme }) =>
            theme.media(
                'tablet-p',
                `
			    display: inline;
			    `
            )};
    }

    span:nth-of-type(2) {
        color: ${({ theme }) => theme.palette.primary.a};
        font-weight: 700;
    }
`;

export { Wrapper, InnerWrap, Strapline };
