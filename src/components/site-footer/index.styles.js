import styled from 'styled-components';
import { rem } from 'polished';

const FooterWrap = styled.footer`
    background: ${({ theme }) => theme.palette.primary.white};
    padding: ${({ theme }) => theme.padding.md} 0;
`;

const InnerWrap = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${({ theme }) =>
        theme.media(
            'tablet-p',
            `
            flex-direction: row;
            `
        )};
`;

const Img = styled.img`
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    display: block;
    height: auto;
    margin: 0 0 ${({ theme }) => theme.margin.md} 0;
    width: ${rem(150)};

    ${({ theme }) =>
        theme.media(
            'tablet-p',
            `
            margin: 0 ${theme.margin.md} 0 0;
            width: ${rem(250)};
            `
        )};
`;

const Content = styled.div``;
export { FooterWrap, InnerWrap, Img, Content };
