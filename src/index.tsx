import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import Home from './components/sections/home';
import Nav from './components/nav';
import Social from './components/social';

// For SF, use Text for text that's smaller than 20 points; use Display for text that's 20 points or larger.

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SF Pro Text';
        font-weight: 400;
        src: url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscotext-regular-webfont.woff);
    }

    @font-face {
        font-family: 'SF Pro Text';
        font-weight: 600;
        src: url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscotext-bold-webfont.woff);
    }

    @font-face {
        font-family: 'SF Pro Display';
        font-weight: 400;
        src: url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff);
    }

    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        font-family: 'SF Pro Text';
        background-color: #f9f9f9;
    }

    h1 {
        font-size: 80px;
        font-family: 'SF Pro Display';
        color: #3f3f40;
    }

    span {
        color: #3f3f40;
    }

    a {
        color: #3f3f40;
        text-decoration: none;
    }

    a:visited {
        color: #3f3f40;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
`;

render(
    <div style={{ width: '100vw', height: '100vh' }}>
        <GlobalStyle />

        <Home />

        <Nav />
        <Social />
    </div>,
    document.getElementById('root')
);
