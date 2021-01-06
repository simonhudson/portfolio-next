import React from 'react';
import { Wrap, Title } from './index.styles';
import { layout } from '~/theme';

const Hero = () => {
    return (
        <Wrap data-test="hero">
            <layout.Wrap>
                <Title data-test="hero__title">
                    <span>Hi there, my name&apos;s Simon.&nbsp;</span>I am an
                    experienced <strong>user interface developer</strong> who
                    specialises in writing <strong>HTML</strong>,{' '}
                    <strong>CSS</strong> and <strong>JavaScript</strong> to
                    create <strong>accessible</strong> and{' '}
                    <strong>usable</strong> websites and applications.
                </Title>
            </layout.Wrap>
        </Wrap>
    );
};

export default Hero;
