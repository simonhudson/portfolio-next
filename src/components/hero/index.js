import React from 'react';
import { Wrap, Title, Shape } from './index.styles';
import { layout } from '~/theme';

const Hero = () => {
    return (
        <Wrap data-test="hero">
            <layout.Wrap>
                <Title data-test="hero__title">
                    <span>Hi there, my name&apos;s Simon.&nbsp;</span>I am an
                    experienced <strong>front-end developer</strong> who
                    specialises in writing lean, standards-compliant{' '}
                    <strong>HTML</strong>, <strong>CSS</strong> and{' '}
                    <strong>JavaScript</strong> to create{' '}
                    <strong>accessible</strong> and <strong>usable</strong>{' '}
                    websites and applications.
                </Title>
            </layout.Wrap>
            <Shape
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <polygon fill="#f5f5f5" points="0,100 100,0 100,100" />
            </Shape>
        </Wrap>
    );
};

export default Hero;
