import React from 'react';
import './css/styles.scss';
import NewTabWarning from 'components/new-tab-warning';
import Icon from 'components/icon';

const LinkItem = (props) => {
    if (props.isDisabled) return null;

    return (
        <li className="external-links__item">
            <a
                className="external-links__link"
                href={props.href}
                rel="noopener noreferrer"
                target="_blank"
            >
                <Icon type={props.icon} />
                <span className="external-links__link-text">
                    {props.CTAText}
                </span>
                <NewTabWarning />
            </a>
        </li>
    );
};

export default LinkItem;
