import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './ShareLinks.module.scss';
import Icons from '~/components/asset/Icons';
const cx = classNames.bind(styles);
const shareLinks = [
    {
        Icon: Icons.Tag,
        title: 'Nhúng',
        href: '/',
    },
    {
        Icon: Icons.Line,
        title: 'Chia sẻ với Line',
        href: 'https://lineit.line.me/share/ui?text=https%3A%2F%2Fwww.tiktok.com%2F%40ppkpg55%3Fis_from_webapp%3D1%26sender_device%3Dpc&url=https%3A%2F%2Fwww.tiktok.com%2F%40ppkpg55%3Fis_from_webapp%3D1%26sender_device%3Dpc',
    },
    {
        Icon: Icons.Facebook,
        title: 'Chia sẻ với Facebook',
        href: 'https://www.facebook.com/sharer/sharer.php?app_id=113869198637480&display=popup&sdk=joey&u=https%3A%2F%2Fwww.tiktok.com%2F%40ppkpg55%3Fis_from_webapp%3D1%26sender_device%3Dpc',
    },
    {
        Icon: Icons.Twitter,
        title: 'Chia sẻ với Twitter',
        href: 'https://twitter.com/intent/tweet?refer_source=https%3A%2F%2Fwww.tiktok.com%2F%40ppkpg55%3Fis_from_webapp%3D1%26sender_device%3Dpc&text=https%3A%2F%2Fwww.tiktok.com%2F%40ppkpg55%3Fis_from_webapp%3D1%26sender_device%3Dpc',
    },
    {
        Icon: Icons.CoppyPath,
        title: 'Sao chép liên kết',
        href: '/',
    },
    {
        Icon: Icons.Email,
        title: 'Chia sẻ với Email',
        href: 'mailto:?body=https%3A%2F%2Fwww.tiktok.com%2F%40ppkpg55%3Fis_from_webapp%3D1%26sender_device%3Dpc&subject=https%3A%2F%2Fwww.tiktok.com%2F%40ppkpg55%3Fis_from_webapp%3D1%26sender_device%3Dpc',
    },
    {
        Icon: Icons.WhatsApp,
        title: 'Chia sẻ với WhatsApp',
        href: 'https://wa.me/?text=https%3A%2F%2Fwww.tiktok.com%2F%40ppkpg55%3Fis_from_webapp%3D1%26sender_device%3Dpc',
    },
    {
        Icon: Icons.Printerest,
        title: 'Chia sẻ với Printerest',
        href: 'https://pinterest.com/pin/create/button/?desc=https%3A%2F%2Fwww.tiktok.com%2F%40ppkpg55%3Fis_from_webapp%3D1%26sender_device%3Dpc&media=https%3A%2F%2Flf16-tiktok-web.ttwstatic.com%2Fobj%2Ftiktok-web-common-sg%2Fmtact%2Fstatic%2Fimages%2Fshare_img.png&url=https%3A%2F%2Fwww.tiktok.com%2F%40ppkpg55%3Fis_from_webapp%3D1%26sender_device%3Dpc',
    },
];

function ShareLinks({ arrowStyle, offset = [], placement = '', children }) {
    const [showLinks, setShowLinks] = useState(true);
    const [Links, setLinks] = useState({});
    const handleShowLinks = () => {
        setShowLinks(false);
    };
    const handleOnHide = () => {
        setShowLinks(true);
    };
    useEffect(() => {
        if (!showLinks) {
            setLinks(
                shareLinks.map(({ Icon, href, title }, index) => {
                    return (
                        <a key={index} href={href} className={cx('share-item')}>
                            <Icon />
                            <span className={cx('share-title')}>{title}</span>
                        </a>
                    );
                }),
            );
        } else {
            setLinks(
                // eslint-disable-next-line
                shareLinks.map(({ Icon, href, title }, index) => {
                    if (index < 5)
                        return (
                            <a key={index} href={href} className={cx('share-item')}>
                                <Icon />
                                <span className={cx('share-title')}>{title}</span>
                            </a>
                        );
                }),
            );
        }
    }, [showLinks]);
    return (
        <Tippy
            // visible={true}
            interactive={true}
            appendTo={document.body}
            placement={placement}
            offset={offset}
            delay={[0, 800]}
            onHide={handleOnHide}
            render={() => (
                <div className={cx(`tippy-share`, arrowStyle)}>
                    <PopperWapper>
                        <div className={cx('tippy-share_wrap')}>
                            {Links}
                            {showLinks ? (
                                <span onClick={handleShowLinks} className={cx('more-btn')}>
                                    <Icons.Down />
                                </span>
                            ) : null}
                        </div>
                    </PopperWapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
export default ShareLinks;
