import React from 'react';
import { Wrap, Inner, Title, SubTitle } from './index.styles';
import { layout } from '~/theme';
import data from '~/components/links/data';

const Hero = () => {
    return (
        <Wrap data-test="hero">
            <layout.Wrap>
                <Inner>
                    <Title data-test="hero__title">
                        <span>Hi there, my name&apos;s Simon.&nbsp;</span>I am
                        an experienced <strong>user interface developer</strong>{' '}
                        who uses <strong>HTML</strong>, <strong>CSS</strong> and{' '}
                        <strong>JavaScript</strong> to create{' '}
                        <strong>accessible</strong> and <strong>usable</strong>{' '}
                        websites and applications.
                    </Title>
                    <SubTitle>
                        You can have a look at what I&apos;ve been up to over at{' '}
                        <a href={data.github.url}>Github</a>,{' '}
                        <a href={data.stackOverflow.url}>StackOverflow</a> and{' '}
                        <a href={data.linkedIn.url}>LinkedIn</a>
                    </SubTitle>
                </Inner>
            </layout.Wrap>
        </Wrap>
    );
};

export default Hero;
