import styled from 'styled-components';
import { rem } from 'polished';
import { padding } from '~/theme';

const LAYOUT_SWITCH_BREAKPOINT = 'tablet-l';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${padding.md} 0;

    ${({ theme }) =>
        theme.media(
            LAYOUT_SWITCH_BREAKPOINT,
            `
            flex-direction: row;
            padding: ${padding.lg} 0;

            &:nth-of-type(2n) {
                flex-direction: row-reverse;
            }
            `
        )};
`;

const Img = styled.img`
    height: 100%;
    width: 100%;

    ${({ theme }) =>
        theme.media(
            LAYOUT_SWITCH_BREAKPOINT,
            `
            width: 50%;
            `
        )};
`;

const Text = styled.div`
    height: 100%;
    width: 100%;

    ${({ theme }) =>
        theme.media(
            LAYOUT_SWITCH_BREAKPOINT,
            `
            width: 50%;
            `
        )};
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.palette.primary.bodyText};
    font-weight: 600;
    font-size: ${rem(18)};
    margin-bottom: ${({ theme }) => theme.margin.default};
`;

export { Wrap, Img, Text, Title };
