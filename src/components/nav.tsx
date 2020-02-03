import React, { useState } from 'react';
import styled from 'styled-components';

const List = styled.ul`
    position: fixed;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    float: left;
`;

const Item = styled.li`
    margin-bottom: 40px;

    :last-child {
        margin: 0;
    }

    & > a {
        display: inline-block;
        position: relative;
        font-size: 14px;
        letter-spacing: 2px;
        font-weight: 600;
    }
`;

const Line = styled.div`
    width: 100%;
    height: 3px;
    position: absolute;
    top: 7px;
    background-color: #0b0b0b;
    transition: left 500ms;
`;

const Cover = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    background-color: #f9f9f9;
`;

const items = [
    { key: 'nav_home', name: 'HOME', link: '#home' },
    { key: 'nav_about', name: 'ABOUT', link: '#about' },
    { key: 'nav_experience', name: 'EXPERIENCE', link: '#experience' },
    { key: 'nav_projects', name: 'PROJECTS', link: '#projects' }
];

const Nav = () => {
    const [currentLink, setCurrentLink] = useState('HOME');

    return (
        <List>
            {items.map(item => (
                <Item key={item.key} onClick={() => setCurrentLink(item.name)}>
                    <a href={item.link}>
                        {item.name}
                        <Line style={{ left: currentLink === item.name ? '0' : '-100%' }} />
                        <Cover />
                    </a>
                </Item>
            ))}
        </List>
    );
};

export default Nav;
