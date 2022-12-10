import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// get LoginState
import { Consumer } from '~/Context';

// set className
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
    type,
    loginType,
    content,
    to,
    href,
    btnStyle,
    size,
    width,
    height,
    color,
    leftIcon,
    rightIcon,
    disabled,
    message,
    onClick = () => {},
    ...passProps
}) {
    const consumer = Consumer();
    const [isLogin] = consumer.isLogin;
    const [, setLoginPopper] = consumer.loginPopper;
    const props = {
        ...passProps,
        to,
        href,
    };
    let Comp = 'button';
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        Comp = Link;
        props.to = to;
    }
    if (href) {
        Comp = 'a';
        props.href = href;
    }

    const classname = cx('Button_Component', btnStyle, size, {
        disabled,
        Button: true,
    });
    if (btnStyle === 'simple_style') {
        return (
            <Tippy content={content} placement={'bottom'}>
                <Comp className={cx('Button_Component', btnStyle, size)} {...props}>
                    <span>{leftIcon}</span>
                </Comp>
            </Tippy>
        );
    }
    if (message) {
        return (
            <Comp className={classname} style={{ minWidth: width, minHeight: height, color: color }} {...props}>
                <span>{content}</span>
            </Comp>
        );
    }

    // handle Login and Register buttons
    const handleOnclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isLogin && loginType) {
            setLoginPopper(true);
        } else {
            onClick();
        }
    };

    return (
        <Comp
            className={classname}
            style={{ minWidth: width, minHeight: height, color: color }}
            {...props}
            onClick={handleOnclick}
        >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{content}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    content: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    btnStyle: PropTypes.string.isRequired,
    size: PropTypes.string,
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
    disabled: PropTypes.bool,
};
export default Button;
