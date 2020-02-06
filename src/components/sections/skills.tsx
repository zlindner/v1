import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Content = styled.section`
    & > div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

const List = styled.ul`
    width: 360px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 30px;
`;

const Skill = styled.li`
    display: block;
    width: 100px;
    height: 100px;

    & > img {
        width: 100px;
        height: 100px;
        transition: filter 300ms;
    }

    & > img:hover {
        filter: invert(1);
    }
`;

type Props = {
    anchor: React.RefObject<any>;
};

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
                <div className={visible ? 'strike struck' : 'strike'} />
                SKILLS
            </h3>

            {/* make this div a grid, allow multiple categories per row */}
            <div>
                <h4>LANGUAGES</h4>

                <List>
                    <Skill>
                        <img src={require('../../assets/python.svg')} />
                    </Skill>
                </List>

                <h4>MACHINE LEARNING</h4>

                <List>
                    <Skill>
                        <img src={require('../../assets/tensorflow.svg')} />
                    </Skill>
                    <Skill>
                        <img src={require('../../assets/keras.svg')} />
                    </Skill>
                    <Skill>
                        <img src={require('../../assets/scikit-learn.svg')} />
                    </Skill>
                </List>

                <h4>FRONTEND</h4>

                <h4>BACKEND</h4>
            </div>
        </Content>
    );
};

export default Skills;
