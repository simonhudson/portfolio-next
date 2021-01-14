import styled from 'styled-components';

const VisuallyHidden = styled.span`
    clip-path: inset(100%);
    clip: rect(0, 0, 0, 0);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export default VisuallyHidden;
