import React from 'react';
import data from './data';
import Item from './item';

const Portfolio = () =>
    data.map((item, index) => <Item key={index} {...item} />);

export default Portfolio;
