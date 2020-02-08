import React, { useState } from 'react';
import styled from 'styled-components';

const Content = styled.section``;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    position: relative;
`;

const Project = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    margin-bottom: 100px;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        postiion: relative;
        grid-area: 1 / 1 / -1 / 7;
        z-index: 2;
    }

    &:nth-of-type(2n + 1) > div {
        grid-column: 7 / -1;
        align-items: flex-end;
    }

    & > div > h4 {
        margin-bottom: 20px;
    }

    & > div > p {
        width: 100%;
        display: block;
        margin: 0;
        padding: 25px;
        box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
        border-radius: 3px;
        background-color: #f9f9f9;
    }

    & > div > ul {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 25px;
        margin-bottom: 10px;
    }

    & > div > ul > li {
        font-size: 14px;
        margin-right: 20px;
        margin-left: 0;
    }

    &:nth-of-type(2n + 1) > div > ul {
        justify-conent: flex-end;
    }

    &:nth-of-type(2n + 1) > div > ul > li {
        margin-left: 20px;
        margin-right: 0;
    }

    & > a {
        display: inline-block;
        grid-area: 1 / 6 / -1 / -1;
        border-radius: 3px;
        z-index: 1;
    }

    &:nth-of-type(2n + 1) > a {
        grid-column: 1 / 8;
    }

    & > a > img {
        width: 100%;
        max-width: 100%;
        box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
    }
`;

type Props = {
    anchor: React.RefObject<any>;
};

const mainProjects = [
    {
        key: 'project_sopview',
        name: 'sopview',
        description:
            'A web app that allows medical device companies to automate part of their Standard Operating Procedure (SOP) auditing process.',
        link: 'https://github.com/zlindner/sopview',
        tech: ['typescript', 'react', 'redux', 'flask', 'tensorflow', 'postgresql']
    },
    {
        key: 'project_pripol',
        name: 'pripol',
        description:
            'Privacy policy coverage analysis using deep neural networks. Awarded "Best Computer Science Poster" at the 2019 CEPS Undergraduate Poster Session.',
        link: 'https://github.com/zlindner/pripol/tree/4910',
        tech: ['python', 'tensorflow', 'keras']
    }
];

const Projects = (props: Props) => {
    const [visible, setVisible] = useState(false);

    return (
        <Content ref={props.anchor}>
            <h3>
                <div className={visible ? 'strike struck' : 'strike'} />
                PROJECTS
            </h3>

            <div>
                {mainProjects.map(project => (
                    <Project>
                        <div>
                            <h4>{project.name.toUpperCase()}</h4>
                            <p>{project.description}</p>
                            <ul>
                                {project.tech.map(tech => (
                                    <li>{tech.toUpperCase()}</li>
                                ))}
                            </ul>
                        </div>

                        <a href={project.link} target='_blank noopener noreferrer'>
                            <img src={require('../../assets/' + project.name + '.png')} alt='' />
                        </a>
                    </Project>
                ))}
            </div>
        </Content>
    );
};

export default Projects;
