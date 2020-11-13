import React from 'react';
import { Wrap, Title, Shape, CTA } from './index.styles';
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
                    href="#site-footer"
                    onClick={(e) => scrollToElement(e, 'site-footer')}
                >
                    Want to know more?
                </CTA>
            </layout.Wrap>
            <Shape
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <polygon fill="#F6EFE9" points="0,100 100,0 100,100" />
            </Shape>
        </Wrap>
    );
};

export default Hero;
