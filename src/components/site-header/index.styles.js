import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Wrapper = styled.div`
    background: transparent;
    border-top: ${rem(10)} solid ${({ theme }) => theme.palette.primary.brand};
    padding: ${rem(20)} 0 ${rem(10)};
    position: sticky;
    top: -1px;
    /* transition: box-shadow 0.5s ease-in-out, padding 0.5s ease-in-out; */
    width: 100%;
    z-index: ${({ theme }) => theme.zIndex('site-header')};

    ${({ theme }) =>
        theme.media(
            'tablet-l',
            `
			    padding: ${rem(40)} 0 ${rem(20)};
			    `
        )};

    ${(props) =>
        props.isScrolled &&
        css`
            background: ${({ theme }) => theme.palette.primary.white};
            box-shadow: 0 0 5px #bbb;
            padding-top: ${rem(10)};

            ${({ theme }) =>
                theme.media(
                    'tablet-l',
                    `
			    padding-top: ${rem(20)};
			    `
                )};
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

    span {
        opacity: 0;
        //transition: all 0.5s ease-in-out;

        ${(props) =>
            props.isScrolled &&
            css`
                opacity: 1;
            `};
    }

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
        color: ${({ theme }) => theme.palette.primary.brand};
        font-weight: 700;
    }
`;

export { Wrapper, InnerWrap, Strapline };
