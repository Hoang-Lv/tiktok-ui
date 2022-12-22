import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { SuggestedAcc, Followings } from '~/services';
// Element childrens
import Button from '~/components/Button';
import Menu from './Menu';
import Account from './Account';
import Footer from './Footer';
import { Consumer } from '~/Context';

const cx = classNames.bind(styles);

function Sidebar({ smallWidth }) {
    const [isLogin] = Consumer().isLogin;
    const [topValue, setTopValue] = useState(0);
    const [showScrollBar, setShowScrollBar] = useState(false);

    const handleScrollBar = (e) => {
        const scrollValue = e.target.scrollTop / 2;
        setTopValue(scrollValue);
    };
    return (
        <div
            onMouseOver={() => {
                setShowScrollBar(true);
            }}
            onMouseLeave={() => {
                setShowScrollBar(false);
            }}
            onScroll={handleScrollBar}
            className={cx('sidebar')}
            style={{ width: smallWidth ? 240 : '' }}
        >
            <div onScroll={handleScrollBar} className={cx('sidebar-wrap')}>
                <div className={cx('sidebar_list')}>
                    <Menu />
                    {isLogin ? (
                        ''
                    ) : (
                        <div className={cx('sidebar-follow-now')}>
                            <p className={cx('sidebar-follow-now-title')}>
                                Đăng nhập để follow các tác giả thích video và xem các bình luận.
                            </p>
                            <Button content="Đăng nhập" btnStyle="primary-color--border_style" height={48} loginType />
                        </div>
                    )}
                    <Account suggestedAcc api={SuggestedAcc} title={'Tài khoản được đề xuất'} />
                    {isLogin ? <Account following api={Followings} title={'Các tài khoản đang follow'} /> : ''}
                    <Account discovery api={SuggestedAcc} title={'Khám phá'} />
                    <Footer />
                </div>
            </div>
            <div className={cx('scrollbar')} style={{ opacity: showScrollBar ? 1 : 0, top: topValue }}></div>
        </div>
    );
}
export default Sidebar;
