import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        oveerflow: hidden;
    }
`;

render(
    <div>
        <GlobalStyle />
    </div>,
    document.getElementById('root')
);
