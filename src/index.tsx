import React, { createRef } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import Home from './components/sections/home';
import About from './components/sections/about';
import Skills from './components/sections/skills';
import Experience from './components/sections/experience';
import Projects from './components/sections/projects';
import Nav from './components/nav';
import Social from './components/social';

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

    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: 'SF Pro Text';
        font-size: 20px;
        background-color: #f9f9f9;
        color: #3f3f40;
    }

    section {
        max-width: 800px;
        margin: 0 auto;
        padding: 150px 0;
        box-sizing: border-box;
    }

    section .line {
        height: 7px;
        top: 15px;
    }

    h1 {
        font-size: 80px;
        font-family: 'SF Pro Text';
        color: #3f3f40;
        font-weight: 600;
    }

    h3 {
        display: inline-block;
        position: relative;
        font-size: 32px;
        font-family: 'SF Pro Text';
        color: #3f3f40;
        letter-spacing: 4px;
        font-weight: 600;
    }

    h4 {
        display: inline-block;
        position: relative;
        font-size: 24px;
        font-family: 'SF Pro Text';
        color: #3f3f40;
        letter-spacing: 3px;
        font-weight: 400;
    }

    span {
        color: #3f3f40;
    }

    a {
        color: #3f3f40;
        text-decoration: none;
        outline: none;
        user-select: none;
    }

    a:visited {
        color: #3f3f40;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    @keyframes strike {
        0%   { width : 0; }
        100% { width: 100%; }
      }

    .strike {
        position: relative;
    }

    .strike::after {
        width: 0;
        height: 7px;
        position: absolute;
        top: 16px;
        left: 0;
        content: ' ';
        background: #0b0b0b;
    }

    .struck::after {
        width: 100%;
        animation-name: strike;
        animation-duration: 500ms;
    }
`;

const homeAnchor = createRef();
const aboutAnchor = createRef();
const skillsAnchor = createRef();
const experienceAnchor = createRef();
const projectsAnchor = createRef();

const anchors = [homeAnchor, aboutAnchor, experienceAnchor, projectsAnchor];

render(
    <div style={{ width: '100vw', height: '100vh' }}>
        <GlobalStyle />

        <Home anchor={homeAnchor} />
        <About anchor={aboutAnchor} />
        <Skills anchor={skillsAnchor} />
        <Experience anchor={experienceAnchor} />
        <Projects anchor={projectsAnchor} />

        <Nav anchors={anchors} />
        <Social />
    </div>,
    document.getElementById('root')
);
