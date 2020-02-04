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
};

const About = (props: Props) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY >= 350) {
                setVisible(true);

                document.removeEventListener('scroll', onScroll);
            }
        };

        document.addEventListener('scroll', onScroll, { capture: false, passive: true });
    });

    return (
        <Content ref={props.anchor}>
            <h3>
                ABOUT
                <div className='line' style={{ left: visible ? '0' : '-100%' }} />
                <div className='cover' />
            </h3>

            <div>
                <Description>
                    <p>Hi I'm Zach, a 4th year computer science student at the University of Guelph.</p>
                    <p>
                        I am focused on learning about the state of the art in natural language processing (NLP), as
                        well as the surrounding data pipelines and backend architectures. I am applying what I've
                        learned to build NLP web applications with React, Typescript, and TensorFlow.
                    </p>
                </Description>

                <Image>
                    <img />
                </Image>
            </div>
        </Content>
    );
};

export default About;
