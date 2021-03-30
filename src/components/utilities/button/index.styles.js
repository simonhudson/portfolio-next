import styled from 'styled-components';
import { rem } from 'polished';

const Button = styled.button`
	align-items: center;
	background: ${({ theme }) => theme.palette.primary.brand};
	border: 0;
	border-radius: ${rem(3)};
	color: ${({ theme }) => theme.palette.primary.white};
	display: flex;
	font-size: ${rem(16)};
	justify-content: space-around;
	padding: ${rem(16)};
	text-decoration: none;
`;

export { Button };
