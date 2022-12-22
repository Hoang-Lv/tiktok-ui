import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Consumer } from '~/Context';
import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';

import { LogOut } from '~/services';
import config from '~/config';
import { Wrapper as PopperWapper } from '~/components/Popper';
import Icons from '~/components/asset/Icons';
const cx = classNames.bind(styles);

function HeaderMenu({ data = [], children }) {
    const [menu, setMenu] = useState([{ data: data }]);
    const MenuItems = menu[menu.length - 1];
    const context = Consumer();

    let [, setNickName] = context.nickName;
    const [token, setToken] = context.token;
    const [isLogin, setIsLogin] = context.isLogin;
    const [authMe, setAuthMe] = context.auth;
    const [logInState, setLogInState] = context.logInState;
    const [, setLogOutState] = context.logOutState;
    const [darkmode, setDarkMode] = context.darkmode;
    const [showKeyboadShort, setShowKeyboadShort] = context.showKeyboadShort;

    let Items;
    // when is back before menu
    const handleBackPage = () => {
        const newarr = [];
        menu.forEach((item, index) => {
            if (index < menu.length - 1) {
                newarr.push(item);
            }
        });
        setMenu(newarr);
    };
    const handleDarkMode = () => {
        setDarkMode(!darkmode);
        if (darkmode) localStorage.setItem('theme', 'light');
        else localStorage.setItem('theme', 'dark');
    };

    if (menu.length === 1) {
        Items = MenuItems.data.map(
            ({ content, icon, isTrue, href, to, onClick = () => {}, childrens, cl, type, ...props }, index) => {
                const isParent = !!childrens;

                // when is next after menu if isParent is true
                const handleNextPage = () => {
                    if (isParent) setMenu((prev) => [...prev, childrens]);
                    if (type === 'myProfile' && isLogin) {
                        setNickName(authMe.nickname);
                        localStorage.setItem('nickname', authMe.nickname);
                    }
                    if (type === 'logOut') {
                        LogOut(token);
                        setToken('');
                        setIsLogin(false);
                        setAuthMe({});
                        setLogInState(true);
                        setLogOutState(true);
                    }
                    if (type === 'keyboardShort') {
                        setShowKeyboadShort(true);
                    }
                };

                let Type = 'div';

                let passProps = {
                    ...props,
                };
                if (to) {
                    passProps.to = to;
                    Type = Link;
                }
                if (type === 'myProfile' && isLogin) {
                    passProps.to = `${config.routes.profiles}${authMe.nickname}`;
                    Type = Link;
                }
                if (href) {
                    passProps.href = href;
                    Type = 'a';
                }
                return (
                    <Type key={index} className={cx('header_menu-item', cl)} {...passProps} onClick={handleNextPage}>
                        {icon && <span className={cx('icon')}>{icon}</span>}
                        <span className={cx('content')}>{content}</span>
                        {type === 'dark-mode' ? (
                            <button
                                className={cx('dark-mode')}
                                style={darkmode ? { background: 'rgb(11, 224, 155)' } : {}}
                                onClick={handleDarkMode}
                            >
                                <span
                                    style={
                                        darkmode
                                            ? { left: 'calc(100% - 2px)', transform: 'translate(-100%, -50%)' }
                                            : {}
                                    }
                                ></span>
                            </button>
                        ) : (
                            ''
                        )}
                    </Type>
                );
            },
        );
    }
    if (menu.length > 1) {
        const item = () => {
            return (
                <>
                    <div className={cx('language_list-header')}>
                        <span className={cx('language_back-icon')} onClick={handleBackPage}>
                            <Icons.Back />
                        </span>
                        <h3>{MenuItems.title}</h3>
                    </div>
                    <ul className={cx('language_list')}>
                        {MenuItems.data.map((item, index) => (
                            <li key={index} className={cx('language_item')}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </>
            );
        };
        Items = item();
    }

    return (
        <Tippy
            interactive
            offset={[16, 6]}
            onHide={menu.length > 1 ? handleBackPage : () => {}}
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <PopperWapper>
                    <div className={cx('header_menu-wrap')} tabIndex="-1" {...attrs}>
                        {Items}
                    </div>
                </PopperWapper>
            )}
        >
            {children}
        </Tippy>
    );
}
HeaderMenu.propTypes = {
    data: PropTypes.array,
    children: PropTypes.element,
};
export default HeaderMenu;
