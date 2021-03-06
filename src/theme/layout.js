import styled from 'styled-components';

const Wrap = styled.div`
    margin: 0 auto;
    width: 90%;

    ${({ theme }) =>
        theme.media(
            'tablet-l',
            `
			width: 984px;
			`
        )};
`;

export { Wrap };
