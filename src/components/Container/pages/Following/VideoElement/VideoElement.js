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

function VideoElement({ data, index, setMuted, muted, state, localVolume, volume, setVolume, poster, onClick }) {
    const { avatar, first_name, last_name, nickname, tick, id, is_followed } = data.user;
    const { likes_count, comments_count, shares_count, is_liked, file_url } = data;
    const width = data.meta.video.resolution_x;
    const height = data.meta.video.resolution_y;

    const [onPlay, setOnPlay] = useState(true);
    const ref = useRef();
    const ConsumerData = Consumer();
    const [token] = ConsumerData.token;
    const [, setLoginPopper] = ConsumerData.loginPopper;
    const [, setNickName] = ConsumerData.nickName;
    const [likeState, setLikeState] = useState(is_liked);
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
        if (value == 0) setMuted(true);
        else setMuted(false);
    };
    const handleSubmitAcc = (data) => {
        setNickName(data.user.nickname);
        localStorage.setItem('nickname', JSON.stringify(data.user.nickname));
    };
    const handleFollow = async (id, type) => {
        setFollowState(!followState);

        const res = await Follow(id, type, token);
        console.log(res);
    };
    const handleLike = async (id, type) => {
        setLikeState(!likeState);

        const res = await LikePost(id, type, token);
        console.log(res);
    };
    return (
        <>
            <Link
                to={`${config.routes.profiles}${nickname}`}
                className={cx('content-item_link')}
                onClick={() => handleSubmitAcc(data)}
            >
                <Avatars src={avatar} atl={nickname} width={56} height={56} />
            </Link>
            <div className={cx('video-wrap')}>
                <div className={cx('video-header')}>
                    <Link
                        to={`${config.routes.profiles}${nickname}`}
                        className={cx('author-name')}
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
                        style={
                            height > width
                                ? {}
                                : {
                                      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${data.thumb_url}) center`,
                                  }
                        }
                    >
                        <Link to={config.routes.video} className={cx('video-link')}>
                            <video
                                id={`video-${index}`}
                                muted={muted}
                                ref={ref}
                                loop
                                poster={poster}
                                style={height > width ? { maxHeight: 485 } : { maxWidth: '100%' }}
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
                        <div className={cx('heart')}>
                            <span
                                className={cx('heart-icon', { active: likeState })}
                                onClick={() => {
                                    if (token.length > 0) {
                                        if (likeState) {
                                            handleLike(data.id, 'unlike');
                                        } else {
                                            handleLike(data.id, 'like');
                                        }
                                    } else {
                                        setLoginPopper(true);
                                    }
                                }}
                            >
                                <Icons.Heart />
                            </span>
                            <p className={cx('count')}>{likes_count}</p>
                        </div>
                        <div className={cx('comment')}>
                            <span>
                                <Icons.Comment />
                            </span>
                            <p className={cx('count')}>{comments_count}</p>
                        </div>
                        <div className={cx('share')}>
                            <span>
                                <Icons.ShareSolid />
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
