import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Content = styled.section`
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

const Description = styled.div`
    width: 60%;
    max-width: 480px;
`;

const Image = styled.div`
    width: 40%;
    max-width: 300px;
    margin-left: 60px;
`;

type Props = {
    anchor: React.RefObject<any>;
    scrollY: number;
};

const About = (props: Props) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!visible && props.scrollY >= 350) {
            setVisible(true);
        }
    }, [visible, props.scrollY]);

    return (
        <Content ref={props.anchor}>
            <h3>
                <div className={visible ? 'strike struck' : 'strike'} />
                ABOUT
            </h3>

            <div>
                <Description>
                    <p>Hi I'm Zach, a 4th year computer science student at the University of Guelph.</p>
                    <p>
                        I am focused on learning about the state of the art in natural language processing (NLP), the
                        surrounding data pipelines, and backend architectures. I am applying what I've learned to build
                        NLP web applications with React, Typescript, and TensorFlow.
                    </p>
                </Description>

                <Image>
                    <img alt='' />
                </Image>
            </div>
        </Content>
    );
};

export default About;
