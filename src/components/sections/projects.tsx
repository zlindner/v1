import React from 'react';
import styled from 'styled-components';

const Content = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
`;

type Props = {
    anchor: React.RefObject<any>;
};

const Projects = (props: Props) => {
    return (
        <Content ref={props.anchor}>
            <h3>PROJECTS</h3>
        </Content>
    );
};

export default Projects;
