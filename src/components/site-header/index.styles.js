import styled from 'styled-components';
import { rem } from 'polished';

const Wrapper = styled.div`
    align-items: center;
    background: ${({ theme }) => theme.palette.primary.white};
    border-top: ${rem(10)} solid ${({ theme }) => theme.palette.primary.b};
    display: flex;
    flex-wrap: wrap;
    padding: ${rem(20)};
    width: 100%;
`;

const Strapline = styled.p`
    color: ${({ theme }) => theme.palette.primary.bodyText};
    font-size: ${rem(14)};
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
        color: ${({ theme }) => theme.palette.primary.b};
        font-weight: 700;
    }
`;

export { Wrapper, Strapline };
