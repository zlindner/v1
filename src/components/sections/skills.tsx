import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Content = styled.section`
    position: relative;
`;

const Categories = styled.ul`
    display: block;
    position: absolute;
    right: 0;

    & > li {
        float: right;
        clear: right;
        margin-bottom: 5px;
        cursor: pointer;
    }

    & > li:last-child {
        margin: 0;
    }

    & .strike::after {
        height: 4px;
        top: 10px;
    }
`;

const Grid = styled.div`
    width: calc(100% - 300px);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 40px;
    row-gap: 50px;
`;

const Skill = styled.div`
    width: 100px;
    height: 100px;
    text-align: center;

    & > img {
        width: 100px;
        height: 100px;
    }

    & > span {
        font-size: 14px;
    }
`;

type Props = {
    anchor: React.RefObject<any>;
};

const categories = [
    {
        name: 'languages',
        skills: ['python', 'c', 'java', 'javascript', 'typescript']
    },
    {
        name: 'machine learning',
        skills: ['tensorflow', 'keras', 'scikit-learn']
    },
    {
        name: 'frontend',
        skills: ['react', 'redux', 'nodejs', 'jest', 'javafx']
    },
    {
        name: 'backend',
        skills: ['mysql', 'postgresql', 'flask', 'redis']
    },
    {
        name: 'build/deploy',
        skills: ['docker', 'aws', 'heroku', 'webpack', 'babel']
    },
    {
        name: 'other',
        skills: ['git', 'linux', 'macos', 'windows']
    }
];

const Skills = (props: Props) => {
    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState('languages');

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
                <div className={visible ? 'strike struck' : 'strike'} />
                SKILLS
            </h3>

            <Categories>
                {categories.map(category => (
                    <li onClick={() => setCurrent(category.name)}>
                        <div className={current === category.name ? 'strike struck' : 'strike'} />
                        <span>{category.name.toUpperCase()}</span>
                    </li>
                ))}
            </Categories>

            <Grid>
                {categories
                    .find(category => category.name === current)!
                    .skills.map(skill => (
                        <Skill>
                            <img src={require('../../assets/' + skill + '.svg')} alt='' />
                            <span>{skill.toUpperCase()}</span>
                        </Skill>
                    ))}
            </Grid>
        </Content>
    );
};

export default Skills;
