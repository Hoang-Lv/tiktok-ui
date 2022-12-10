import { useState, useEffect } from 'react';
import { Consumer } from '~/Context';
import Tippy from '@tippyjs/react/headless';
import { Follow } from '~/services';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Avatars from '~/components/asset/Avatars';
import Button from '~/components/Button';
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
function Header({ profile, myProf }) {
    const [token] = Consumer().token;
    const {
        id,
        avatar,
        bio,
        full_name,
        followers_count,
        followings_count,
        likes_count,
        nickname,
        tick,
        first_name,
        last_name,
        is_followed,
    } = profile;
    const [showLinks, setShowLinks] = useState(true);
    const [Links, setLinks] = useState(
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
    const [avatarUrl, setAvatarUrl] = useState(avatar);
    const [followState, setFollowState] = useState(is_followed);
    useEffect(() => {
        setFollowState(is_followed);
        setAvatarUrl(avatar);
    }, [profile]);

    const links = [];
    Object.keys(profile).forEach((key) => {
        if (key.endsWith('_url')) links.push(profile[key]);
    });
    const handleShowLinks = () => {
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
        setShowLinks(false);
    };
    const handleOnHide = () => {
        setLinks(
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
        setShowLinks(true);
    };
    return (
        <div className={cx('profile-header')}>
            <div className={cx('user-info')}>
                <Avatars src={avatarUrl} alt={full_name} />
                <div className={cx('user-info_wrap')}>
                    <div className={cx('nickname-wrap')}>
                        <h1 className={cx('user-nickname')}>{nickname}</h1>
                        {tick && (
                            <span>
                                <Icons.Check />
                            </span>
                        )}
                    </div>
                    <h3 className={cx('user-fullname')}>{full_name ? full_name : `${first_name} ${last_name}`}</h3>
                    {myProf ? (
                        <div className={cx('follow-state')}>
                            <div className={cx('follow-state--wrap')}>
                                <Button
                                    content="Sửa hồ sơ"
                                    leftIcon={<Icons.Edit />}
                                    btnStyle="basic_style"
                                    width={164}
                                    height={36}
                                    onClick={() => {
                                        console.log('edit');
                                    }}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className={cx('follow-state')}>
                            {followState ? (
                                <div className={cx('follow-state--wrap')}>
                                    <Button
                                        content="Tin nhắn"
                                        btnStyle="primary-color--border_style"
                                        width={164}
                                        height={36}
                                        message
                                    />
                                    <div
                                        className={cx('unfollow')}
                                        onClick={() => {
                                            Follow(id, 'unfollow', token);
                                            setFollowState(false);
                                        }}
                                    >
                                        <Icons.UserCheck />
                                    </div>
                                </div>
                            ) : (
                                <div
                                    onClick={() => {
                                        Follow(id, 'follow', token);
                                        setFollowState(true);
                                    }}
                                >
                                    <Button content="Follow" btnStyle="primary-color_style" size="profile-size" />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className={cx('count-info')}>
                <div className={cx('followings')}>
                    <strong>{followings_count}</strong>
                    <span>Đang Follow</span>
                </div>
                <div className={cx('follower')}>
                    <strong>{followers_count}</strong>
                    <span>Follower</span>
                </div>
                <div className={cx('followings')}>
                    <strong>{likes_count}</strong>
                    <span>Thích</span>
                </div>
            </div>
            <p className={cx('user-bio')}>{bio}</p>
            {links.map((item, index) => {
                if (item !== '')
                    return (
                        <a key={index} href={item} className={cx('user-links')}>
                            <Icons.Link />
                            <span className={cx('link-path')}>{item}</span>
                        </a>
                    );
                // eslint-disable-next-line
                return;
            })}
            <div className={cx('header-icons')}>
                <Tippy
                    // visible={true}
                    interactive={true}
                    appendTo={document.body}
                    placement={'bottom-end'}
                    offset={[23, 7]}
                    delay={[0, 800]}
                    onHide={handleOnHide}
                    render={() => (
                        <div className={cx('tippy-share')}>
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
                    <span className={cx('share-icon')}>
                        <Icons.ShareSolid />
                    </span>
                </Tippy>
                <Tippy
                    interactive={true}
                    appendTo={document.body}
                    placement={'bottom-end'}
                    offset={[23, 7]}
                    delay={[0, 800]}
                    onHide={handleOnHide}
                    render={() => (
                        <div className={cx('tippy-more_action')}>
                            <PopperWapper>
                                <div className={cx('tippy-more_action-wrap')}>
                                    <div className={cx('more-item')}>
                                        <a className={cx('more-item_link')}>
                                            <Icons.Message />
                                            <span className={cx('more-tite')}>Gửi tin nhắn</span>
                                        </a>
                                    </div>
                                    <div className={cx('more-item')}>
                                        <a className={cx('more-item_link')}>
                                            <Icons.Flag />
                                            <span className={cx('more-tite')}>Báo cáo</span>
                                        </a>
                                    </div>
                                    <div className={cx('more-item')}>
                                        <a className={cx('more-item_link')}>
                                            <Icons.Block />
                                            <span className={cx('more-tite')}>Chặn</span>
                                        </a>
                                    </div>
                                </div>
                            </PopperWapper>
                        </div>
                    )}
                >
                    <span className={cx('more-icon')}>
                        <Icons.More />
                    </span>
                </Tippy>
            </div>
        </div>
    );
}
export default Header;
