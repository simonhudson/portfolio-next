import React from 'react';
import { Wrap, Title, CTA } from './index.styles';
import { layout } from '~/theme';
import scrollToElement from '~/utilities/scrollToElement';

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
                <CTA
                    data-test="hero__cta"
                    href="#site-footer"
                    onClick={(e) => scrollToElement(e, 'site-footer')}
                >
                    Want to know more?
                </CTA>
            </layout.Wrap>
        </Wrap>
    );
};

export default Hero;
