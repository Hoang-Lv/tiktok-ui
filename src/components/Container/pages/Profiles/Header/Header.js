import { useState, useEffect } from 'react';
import { Consumer } from '~/Context';
import Tippy from '@tippyjs/react/headless';
import { Follow } from '~/services';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import ShareLinks from '~/components/ShareLinks';
import Avatars from '~/components/asset/Avatars';
import Button from '~/components/Button';
import Icons from '~/components/asset/Icons';
const cx = classNames.bind(styles);

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

    const [avatarUrl, setAvatarUrl] = useState(avatar);
    const [followState, setFollowState] = useState(is_followed);

    useEffect(() => {
        setFollowState(is_followed);
        setAvatarUrl(avatar);
        // eslint-disable-next-line
    }, [profile]);

    const links = [];
    Object.keys(profile).forEach((key) => {
        if (key.endsWith('_url')) links.push(profile[key]);
    });

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
                <ShareLinks arrowStyle={'top-arrow'} offset={[23, 7]} placement={'top-end'}>
                    <span className={cx('share-icon')}>
                        <Icons.ShareSolid />
                    </span>
                </ShareLinks>
                <Tippy
                    interactive={true}
                    appendTo={document.body}
                    placement={'bottom-end'}
                    offset={[23, 7]}
                    delay={[0, 800]}
                    render={() => (
                        <div className={cx('tippy-more_action')}>
                            <PopperWapper>
                                <div className={cx('tippy-more_action-wrap')}>
                                    <div className={cx('more-item')}>
                                        <a href="/" className={cx('more-item_link')}>
                                            <Icons.Message />
                                            <span className={cx('more-tite')}>Gửi tin nhắn</span>
                                        </a>
                                    </div>
                                    <div className={cx('more-item')}>
                                        <a href="/" className={cx('more-item_link')}>
                                            <Icons.Flag />
                                            <span className={cx('more-tite')}>Báo cáo</span>
                                        </a>
                                    </div>
                                    <div className={cx('more-item')}>
                                        <a href="/" className={cx('more-item_link')}>
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
