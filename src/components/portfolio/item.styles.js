import styled from 'styled-components';
import { rem } from 'polished';
import { padding } from '~/theme';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${padding.md} 0;

    ${({ theme }) =>
        theme.media(
            'tablet-l',
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
    width: 50%;
    height: 100%;
`;

const Text = styled.div`
    width: 50%;
    height: 100%;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.palette.primary.bodyText};
    font-weight: 600;
    font-size: ${rem(18)};
    margin-bottom: ${({ theme }) => theme.margin.default};
`;

export { Wrap, Img, Text, Title };
