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

    & span {
        font-size: 20px;
    }
`;

const Name = styled.h1`
    line-height: 1.1px;
`;

const Description = styled.div`
    width: 100%;
    max-width: 500px;
`;

const Home = () => {
    return (
        <Content id='home'>
            <span>Hi, my name is</span>
            <Name>Zach Lindner.</Name>

            <Description>
                <span>I'm a software engineer focused on building natural language processing applications.</span>
            </Description>
        </Content>
    );
};

export default Home;
