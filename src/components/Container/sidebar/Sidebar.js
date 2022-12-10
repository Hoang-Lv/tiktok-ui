import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { SuggestedAcc, Followings } from '~/services';
// Element childrens
import Menu from './Menu';
import Account from './Account';
import Footer from './Footer';
const cx = classNames.bind(styles);

function Sidebar({ smallWidth }) {
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
                    <Account suggestedAcc api={SuggestedAcc} title={'Tài khoản được đề xuất'} />
                    <Account following api={Followings} title={'Các tài khoản đang follow'} />
                    <Account discovery api={SuggestedAcc} title={'Khám phá'} />
                    <Footer />
                </div>
            </div>
            <div className={cx('scrollbar')} style={{ opacity: showScrollBar ? 1 : 0, top: topValue }}></div>
        </div>
    );
}
export default Sidebar;
