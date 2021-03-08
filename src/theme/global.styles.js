import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html,
    body,
    fieldset {
        box-sizing: border-box;
        font-family: 'Open Sans', arial, helvetica, sans-serif;
        font-size: 14px;
        font-weight: 300;
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
    }
    html, body {
        height: 100%;
    }

    html {
        color: #5d5d5d;
        position: relative;
    }

    html::before {
        background-color: #F4EBD9;
        background-image:
            radial-gradient(#EC7114 1px, transparent 1px),
            radial-gradient(#EC7114 1px, #fff 1px);
        background-position: 0 0, 20px 20px;
        background-size: 40px 40px;
        content: '';
        height: 100%;
        left: 0;
        opacity: 0.25;
        position: absolute;
        top: 0;
        width: 100%;
    }

    ul, ol, dl {
        padding: 0;
    }

    .no-scroll {
        overflow: hidden;
    }

    p {
        line-height: 1.8rem;
        margin-bottom: 2rem;
    }

    span, strong, em {
        font-family: inherit;
        font-size: inherit;
    }

    strong {
        font-weight: 600;
    }

    .no-js-alert {
        display: block;
    }

    fieldset {
        border: 0;
        padding: 0;
    }

    details summary::marker,
    details summary::-webkit-details-marker {
        display: none;
    }
`;

export { GlobalStyles };
