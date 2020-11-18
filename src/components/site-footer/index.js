import React from 'react';
import SiteLogo from '~/components/site-logo';
import { FooterWrap, InnerWrap, Img, Content } from './index.styles';
import { layout } from '~/theme';

const SiteFooter = () => {
    return (
        <FooterWrap id="site-footer" data-test="site-footer">
            <layout.Wrap>
                <InnerWrap>
                    <Img alt="Simon Hudson" src="/imgs/self.jpg" />
                    <Content>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam sed vestibulum dolor, vehicula
                            condimentum massa. Vivamus pretium vel tellus sit
                            amet imperdiet. Maecenas eu dui sed libero tempor
                            luctus. Curabitur lobortis nisi id nunc dapibus
                            semper. Donec in fermentum tortor, nec eleifend
                            libero.
                        </p>
                    </Content>
                </InnerWrap>
                <SiteLogo context="footer" />
            </layout.Wrap>
        </FooterWrap>
    );
};

export default SiteFooter;
