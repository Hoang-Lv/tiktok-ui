import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icons from '~/components/asset/Icons';
import Button from '~/components/Button';
import config from '~/config';
import { Consumer } from '~/Context';
import Avatars from '~/components/asset/Avatars';
import { LikePost, Follow } from '~/services';

import className from 'classnames/bind';
import styles from './VideoElement.module.scss';
const cx = className.bind(styles);

function VideoElement({
    setData,
    users,
    data,
    index,
    setMuted,
    muted,
    state,
    localVolume,
    volume,
    setVolume,
    poster,
    onClick,
}) {
    const { avatar, first_name, last_name, nickname, tick, id, is_followed } = data.user;
    const { likes_count, comments_count, shares_count, is_liked, file_url } = data;
    const width = data.meta.video.resolution_x;
    const height = data.meta.video.resolution_y;

    const [onPlay, setOnPlay] = useState(true);
    const ref = useRef();
    const consumer = Consumer();
    const [token] = consumer.token;
    const [isLogin] = consumer.isLogin;
    const [, setLoginPopper] = consumer.loginPopper;
    const [, setNickName] = consumer.nickName;
    const [likeState, setLikeState] = useState(is_liked);
    const [likesCound, setLikesCound] = useState(likes_count);
    const [followState, setFollowState] = useState(is_followed);

    useEffect(() => {
        if (state && onPlay) {
            setTimeout(() => {
                ref.current?.play();
            }, 300);
        } else {
            setTimeout(() => {
                ref.current?.pause();
            }, 300);
        }
        // eslint-disable-next-line
    }, [state]);
    useEffect(() => {
        ref.current.volume = volume;
    }, [volume]);
    const handlePlayVideo = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (onPlay) ref.current.pause();
        else ref.current.play();
        setOnPlay(!onPlay);
    };
    const handleVolume = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (muted) {
            ref.current.volume = localVolume;
            setVolume(localVolume);
            localStorage.setItem('muted', false);
        } else {
            setVolume(0);
            localStorage.setItem('muted', true);
        }
        localStorage.setItem('muted', !muted);
        setMuted(!muted);
    };
    const handleVolumeRange = (e) => {
        const value = Number(e.target.value);
        setVolume(value);
        localStorage.setItem('vol', value);
        ref.current.volume = volume;
        if (value === 0) setMuted(true);
        else setMuted(false);
    };
    const handleSubmitAcc = (data) => {
        console.log(data);
        setNickName(data.user.nickname);
        localStorage.setItem('nickname', JSON.stringify(data.user.nickname));
    };
    const handleFollow = async (id, type) => {
        setFollowState(!followState);
        const res = await Follow(id, type, token);
        const newArr = [];
        users.forEach((item) => {
            if (item.user_id === res.id) {
                newArr.push({ ...item, user: { ...item.user, is_followed: res.is_followed } });
            } else {
                newArr.push(item);
            }
        });
        setData([...newArr]);
    };

    const handleLike = async (id, type) => {
        setLikeState(!likeState);
        const newArr = [];
        const res = await LikePost(id, type, token);
        users.forEach((item) => {
            if (item.id === res.id) {
                newArr.push({ ...res });
            } else {
                newArr.push(item);
            }
        });
        setData([...newArr]);
    };

    return (
        <>
            <Link
                className={cx('content-item_link')}
                to={`${config.routes.profiles}${nickname}`}
                onClick={() => handleSubmitAcc(data)}
            >
                <Avatars src={avatar} atl={nickname} width={56} height={56} />
            </Link>
            <div className={cx('video-wrap')}>
                <div className={cx('video-header')}>
                    <Link
                        className={cx('author-name')}
                        to={`${config.routes.profiles}${nickname}`}
                        onClick={() => handleSubmitAcc(data)}
                    >
                        <h3 className={cx('full-name')}>{`${first_name} ${last_name}`}</h3>
                        {tick ? (
                            <span className={cx('check')}>
                                <Icons.Check />
                            </span>
                        ) : null}
                        <span className={cx('nick-name')}>{nickname}</span>
                    </Link>
                    <p className={cx('video-description')} style={data.music.length > 0 ? {} : { marginBottom: 12 }}>
                        {data.description}
                    </p>
                    {data.music.length > 0 ? (
                        <h4 className={cx('video-music')}>
                            <Icons.Music />
                            Nhạc xinh quá
                        </h4>
                    ) : null}
                </div>
                <div className={cx('video-play')}>
                    <div
                        className={cx('video')}
                        style={height >= width ? { maxHeight: 520, height: 520 } : { maxWidth: 520, width: 520 }}
                    >
                        <Link to={`${config.routes.video}${data.uuid}`} className={cx('video-link')}>
                            <video
                                id={`video-${index}`}
                                muted={muted}
                                ref={ref}
                                loop
                                poster={poster}
                                onClick={(e) => {
                                    setOnPlay(false);
                                    onClick();
                                }}
                            >
                                <source src={file_url} />
                            </video>
                            <div className={cx('controler')}>
                                <div className={cx('play-btn')} onClick={handlePlayVideo}>
                                    {onPlay ? <Icons.Pause /> : <Icons.Play />}
                                </div>
                                <div className={cx('mute-btn')} style={{ opacity: muted ? 1 : null }}>
                                    <div className={cx('range_volume-wrap')}>
                                        <input
                                            type="range"
                                            min={0}
                                            max={1}
                                            step={0.01}
                                            value={volume}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                            }}
                                            onInput={handleVolumeRange}
                                        />
                                    </div>
                                    <span className={cx('volume-state')} onClick={handleVolume}>
                                        {muted ? <Icons.MuteOn /> : <Icons.MuteOff />}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={cx('video-interactive')}>
                        <div
                            className={cx('heart', 'action-wrap')}
                            onClick={() => {
                                if (token.length > 0) {
                                    if (likeState) {
                                        handleLike(data.id, 'unlike', token);
                                        setLikesCound(likesCound - 1);
                                    } else {
                                        handleLike(data.id, 'like', token);
                                        setLikesCound(likesCound + 1);
                                    }
                                } else {
                                    setLoginPopper(true);
                                }
                            }}
                        >
                            <span className={cx('heart-icon', { active: likeState })}>
                                <Icons.Heart />
                            </span>
                            <p className={cx('count')}>{likesCound}</p>
                        </div>
                        <Link
                            className={cx('comment', 'action-wrap')}
                            to={isLogin ? `${config.routes.video}${data.uuid}` : ''}
                            onClick={() => {
                                if (!isLogin) {
                                    setLoginPopper(true);
                                } else {
                                    onClick();
                                }
                            }}
                        >
                            <span>
                                <Icons.Comment />
                            </span>
                            <p className={cx('count')}>{comments_count}</p>
                        </Link>
                        <div className={cx('share', 'action-wrap')}>
                            <span>
                                <Icons.Share />
                            </span>
                            <p className={cx('count')}>{shares_count}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default VideoElement;
