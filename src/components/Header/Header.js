import { Link } from 'react-router-dom';
import config from '~/config';
import Logo from './header-logo';
import Button from '../Button';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import { Consumer } from '~/Context';
import ShowOptionsPopper from '../ShowOptionsPopper';
// import Icons
import Icons from '../asset/Icons';
import Avartars from '../asset/Avatars';
// classname and scss
import classNames from 'classnames/bind';
import style from './Header.module.scss';
var cx = classNames.bind(style);

const MenuItems = [
    {
        content: 'Tiếng Việt',
        icon: <Icons.Languages />,
        childrens: {
            title: 'Ngôn ngữ',
            data: [
                'Tiếng Việt(Việt Nam)',
                'বাঙ্গালি (ভারত)',
                'Cebuano (Pilipinas)',
                'Čeština (Česká republika)',
                'Deutsch',
                'Ελληνικά (Ελλάδα)',
                'English',
                'Español',
                'Suomi (Suomi)',
                'Filipino (Pilipinas)',
                'Français',
                'हिंदी',
                'Magyar (Magyarország)',
                'Bahasa Indonesia (Indonesia)',
                'Italiano (Italia)',
                '日本語（日本）',
                'Basa Jawa (Indonesia)',
                'ខ្មែរ (កម្ពុជា)',
                '한국어 (대한민국)',
                'Bahasa Melayu (Malaysia)',
                'မြန်မာ (မြန်မာ)',
                'Nederlands (Nederland)',
                'Polski (Polska)',
                'Português (Brasil)',
                'Română (Romania)',
                'Русский (Россия)',
                'Svenska (Sverige)',
                'ไทย (ไทย)',
                'Türkçe (Türkiye)',
            ],
        },
    },
    {
        content: 'Phản hồi và trợ giúp',
        icon: <Icons.Help />,
        to: '/feedback',
    },
    {
        content: 'Phím tắt trên bàn phím',
        icon: <Icons.Keyboard />,
        type: 'keyboardShort',
    },
    {
        content: 'Chế độ tối',
        icon: <Icons.DarkMode />,
        type: 'dark-mode',
    },
];
const MenuItems2 = [
    {
        content: 'Xem hồ sơ',
        icon: <Icons.User />,
        to: `${config.routes.profiles}`,
        type: 'myProfile',
    },
    {
        content: 'Nhận xu',
        icon: <Icons.Coin />,
        to: '/coin',
    },
    {
        content: 'LIVE Studio',
        icon: <Icons.Live />,
    },
    {
        content: 'Cài đặt',
        icon: <Icons.Setting />,
        to: '/setting',
    },
    ...MenuItems,
    {
        content: 'Đăng xuất',
        icon: <Icons.LogOut />,
        to: '/',
        type: 'logOut',
        cl: 'logout',
    },
];
function Header({ fullWidth }) {
    const context = Consumer();
    const [isLogin] = context.isLogin;
    const [authMe] = context.auth;
    const [showKeyboadShort, setShowKeyboadShort] = context.showKeyboadShort;
    return (
        <div className={cx('header')}>
            <div style={{ width: fullWidth ? '100%' : '' }} className={cx('header_wrap')}>
                <Link to={config.routes.home}>
                    <Logo />
                </Link>
                <HeaderSearch />
                <div className={cx('navigation_wrap')}>
                    <Button
                        type={'upload'}
                        loginType
                        content="Tải lên"
                        leftIcon={<Icons.Plus width="2rem" height="2rem" />}
                        btnStyle="basic_style"
                        to={config.routes.upload}
                    />
                    {isLogin ? (
                        <>
                            <Button
                                type={'message'}
                                loginType
                                content="Tin nhắn"
                                leftIcon={<Icons.Message width="2.6rem" height="2.6rem" />}
                                btnStyle="simple_style"
                                to={config.routes.upload}
                            />
                            <Button
                                type={'mailBox'}
                                loginType
                                content="Hộp thư"
                                leftIcon={<Icons.MailBox width="3.2rem" height="3.2rem" />}
                                btnStyle="simple_style"
                                to={config.routes.upload}
                            />
                            <HeaderMenu data={MenuItems2}>
                                <div className={cx('header_menu')}>
                                    <Avartars src={authMe.avatar} alt={authMe.nickname} />
                                </div>
                            </HeaderMenu>
                        </>
                    ) : (
                        <>
                            <Button type={'login'} loginType content="Đăng nhập" btnStyle="primary-color_style" />
                            <HeaderMenu data={MenuItems}>
                                <div className={cx('header_menu')}>
                                    <Icons.Menu />
                                </div>
                            </HeaderMenu>
                        </>
                    )}
                </div>
                {showKeyboadShort ? <ShowOptionsPopper title="Phím tắt trên bàn phím" type="keyboardShort" /> : null}
            </div>
        </div>
    );
}
export default Header;
