import React from 'react';
import styled from 'styled-components';

const Content = styled.section`
    max-width: 800px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
    padding: 150px 0;
    box-sizing: border-box;

    & > h1 {
        line-height: 1.1px;
    }

    & > div {
        width: 100%;
        max-width: 500px;
    }
`;

type Props = {
    anchor: React.RefObject<any>;
};

const Home = (props: Props) => {
    return (
        <Content ref={props.anchor}>
            <span>Hi, my name is</span>
            <h1>Zach Lindner.</h1>

            <div>
                <span>
                    I'm a software engineer with a passion for full-stack development and natural language processing.
                </span>
            </div>
        </Content>
    );
};

export default Home;
