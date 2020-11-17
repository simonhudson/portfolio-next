import React from 'react';
import data from './data';
import Item from './item';
import { PortfolioWrap } from './index.styles';

const Portfolio = () => {
    return (
        <PortfolioWrap>
            {data.map((item, index) => (
                <Item key={index} {...item} />
            ))}
        </PortfolioWrap>
    );
};
export default Portfolio;
