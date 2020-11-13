import styled from 'styled-components';

const FooterWrap = styled.footer`
    background: ${({ theme }) => theme.palette.primary.white};
    padding: ${({ theme }) => theme.padding.lg};
`;

export { FooterWrap };
