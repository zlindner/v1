import React, { useState, useEffect } from 'react';
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

    & .line {
        height: 3px;
        top: 7px;
    }

    & .strike::after {
        height: 3px;
        top: 7px;
    }

    & > span {
        display: inline-block;
        position: relative;
        font-size: 14px;
        letter-spacing: 2px;
        font-weight: 600;
        cursor: pointer;
        user-select: none;
    }
`;

const items = [
    { key: 'nav_home', name: 'HOME', id: 0 },
    { key: 'nav_about', name: 'ABOUT', id: 1 },
    { key: 'nav_skills', name: 'SKILLS', id: 2 },
    { key: 'nav_experience', name: 'EXPERIENCE', id: 3 },
    { key: 'nav_projects', name: 'PROJECTS', id: 4 }
];

type Props = {
    anchors: React.RefObject<any>[];
};

const Nav = (props: Props) => {
    const [currentLink, setCurrentLink] = useState('HOME');

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;

            //console.log(y);

            if (y < 350) {
                setCurrentLink('HOME');
            } else if (y >= 350 && y < 965) {
                setCurrentLink('ABOUT');
            } else if (y >= 965) {
                setCurrentLink('SKILLS');
            }
        };

        document.addEventListener('scroll', onScroll, { capture: false, passive: true });
    });

    return (
        <List>
            {items.map(item => (
                <Item
                    key={item.key}
                    onClick={() => {
                        setCurrentLink(item.name);
                        props.anchors[item.id].current.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <span>
                        <div className={currentLink === item.name ? 'strike struck' : 'strike'} />
                        {item.name}
                    </span>
                </Item>
            ))}
        </List>
    );
};

export default Nav;
