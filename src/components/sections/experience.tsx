import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Content = styled.section``;

type Props = {
    anchor: React.RefObject<any>;
};

const Experience = (props: Props) => {
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
                EXPERIENCE
                <div className='line' style={{ left: visible ? '0' : '-100%' }} />
                <div className='cover' />
            </h3>
        </Content>
    );
};

export default Experience;
