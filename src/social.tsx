import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    position: relative;
    top: 50%;
    right: 50px;
    transform: translateY(-50%);
    float: right;
    writing-mode: vertical-lr;
`;

const Item = styled.li`
    float: left;
    margin-bottom: 40px;

    :last-child {
        margin: 0;
    }

    & > a {
        font-size: 14px;
        letter-spacing: 2px;
        font-weight: 600;
    }
`;

const items = [
    { key: 'social_github', name: 'GITHUB', url: 'https://github.com/zlindner' },
    { key: 'social_linkedin', name: 'LINKEDIN', url: 'https://linkedin.com/in/zachlindner' }
];

const Social = () => {
    return (
        <List>
            {items.map(item => (
                <Item key={item.key}>
                    <a href={item.url} target='_blank' rel='noopener noreferrer'>
                        {item.name}
                    </a>
                </Item>
            ))}
        </List>
    );
};

export default Social;
