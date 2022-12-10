import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Consumer } from '~/Context';
import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import { Wrapper as PopperWapper } from '~/components/Popper';
import Icons from '~/components/asset/Icons';
const cx = classNames.bind(styles);

function HeaderMenu({ data = [], children }) {
    const [menu, setMenu] = useState([{ data: data }]);
    const MenuItems = menu[menu.length - 1];
    const context = Consumer();
    let [, setNickName] = context.nickName;
    const [token] = context.token;
    const [isLogin] = context.isLogin;
    const [authMe] = context.auth;
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

    if (menu.length === 1) {
        Items = MenuItems.data.map(
            ({ content, icon, isTrue, href, to, myProfile, onClick = () => {}, childrens, cl, ...props }, index) => {
                const isParent = !!childrens;

                // when is next after menu if isParent is true
                const handleNextPage = () => {
                    if (isParent) setMenu((prev) => [...prev, childrens]);
                    if (myProfile && isLogin) {
                        setNickName(authMe.nickname);
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
                if (href) {
                    passProps.href = href;
                    Type = 'a';
                }
                return (
                    <Type key={index} className={cx('header_menu-item', cl)} {...passProps} onClick={handleNextPage}>
                        {icon && <span className={cx('icon')}>{icon}</span>}
                        <span className={cx('content')}>{content}</span>
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
