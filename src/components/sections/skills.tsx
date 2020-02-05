import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Content = styled.section``;

const Categories = styled.ul`
    & li {
        float: left;
        margin-right: 40px;
    }

    & li:last-child {
        margin: 0;
    }

    & span {
        display: inline-block;
        position: relative;
        font-size: 18px;
        letter-spacing: 2px;
        font-weight: 600;
        cursor: pointer;
        user-select: none;
    }

    & .line {
        height: 5px;
        top: 9px;
        z-index: -2;
    }

    & .cover {
        z-index: -1;
    }
`;

type Props = {
    anchor: React.RefObject<any>;
};

const categories = [
    { key: 'category_languages', name: 'LANGUAGES' },
    { key: 'category_frontend', name: 'FRONTEND' },
    { key: 'category_backend', name: 'BACKEND' }
];

const Skills = (props: Props) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY >= 965) {
                setVisible(true);

                document.removeEventListener('scroll', onScroll);
            }
        };

        document.addEventListener('scroll', onScroll, { capture: false, passive: true });
    });

    return (
        <Content ref={props.anchor}>
            <h3>
                SKILLS
                <div className='line' style={{ left: visible ? '0' : '-100%' }} />
                <div className='cover' />
            </h3>

            <Categories>
                {categories.map(category => (
                    <li key={category.key}>
                        <span>
                            {category.name}
                            <div className='line' style={{ left: visible ? '0' : '-100%' }} />
                            <div className='cover' />
                        </span>
                    </li>
                ))}
            </Categories>
        </Content>
    );
};

export default Skills;
