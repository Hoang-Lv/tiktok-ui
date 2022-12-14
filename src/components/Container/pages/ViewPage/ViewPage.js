import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '~/Context';

import Icons from '~/components/asset/Icons';
import config from '~/config';
import { ForYouVideos, GetUsersVideos } from '~/services';

import Comments from './Comments';
import classNames from 'classnames/bind';
import styles from './ViewPage.module.scss';
const cx = classNames.bind(styles);

function ViewPage() {
    const data = Consumer();
    const [token] = data.token;
    const [isLogin] = data.isLogin;
    const [logInState, setLogInState] = data.logInState;
    const [logOutState, setLogOutState] = data.logOutState;
    const [, setNickName] = data.nickName;
    // Lấy ra chuỗi nhằm điều hướng đến list video cần tìm (vd: list video foryouvideo trong context)
    let [direction] = data.direction;
    if (typeof direction !== 'string') direction = JSON.parse(localStorage.getItem('direction'));
    // điều hướng đến list video khi đã có phương hướng
    const [videos, setVideos] = data[direction];
    let { videoList = [], index = 0, currentPage = '', loadPage = 1, route = '', userID } = videos;
    if (videoList.length === 0) videoList = JSON.parse(localStorage.getItem('videos'));
    if (!index) index = JSON.parse(localStorage.getItem('index'));
    if (!currentPage) currentPage = JSON.parse(localStorage.getItem('videoSource'));
    if (!loadPage) loadPage = JSON.parse(localStorage.getItem('loadPage'));
    if (!route) route = JSON.parse(localStorage.getItem('route'));
    if (!userID) userID = JSON.parse(localStorage.getItem('userID'));

    // Lấy nickName được lưu trong context nhằm getUser
    let [nickName] = data.nickName;
    if (!nickName) nickName = JSON.parse(localStorage.getItem('data'));

    // Lấy trang trước đó mà trước khi được chuyển hướng đến trang hiện tại, nhằm lấy cơ sở để xử lý nút back
    if (!route) route = JSON.parse(localStorage.getItem('route'));

    // Bước xử lý get video list và index của video được nhấn trước trong trường hợp dữ liệu được lấy ở bên trên bị mất
    if (!videoList) videoList = JSON.parse(localStorage.getItem('videos'));
    if (typeof index !== 'number') index = JSON.parse(localStorage.getItem('index'));

    // Điều kiện để xác định việc load thêm list video mới
    const [loadMore, setLoadMore] = useState(false);
    // số page cần khi load list video mới
    const [page, setPage] = useState(loadPage);
    const [play, setPlay] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [timeLine, setTimeLine] = useState({ duration: 0, current: 0 });
    const [durationTime, setDurationTime] = useState({ seconds: '00', minutes: '00' });
    const [currentTime, setCurrentTime] = useState({ seconds: '00', minutes: '00' });
    const vol = JSON.parse(localStorage.getItem('vol'));
    const muted = JSON.parse(localStorage.getItem('muted'));

    const [showVolume, setShowVolume] = useState(muted || true);
    const [volume, setVolume] = useState(muted ? 0 : vol);
    localStorage.setItem('muted', JSON.stringify(volume === 0 ? true : false));

    const [currentIndex, setCurrentIndex] = useState(index);
    const videoWidth = videoList[currentIndex]?.meta.video.resolution_x;
    const videoHeight = videoList[currentIndex]?.meta.video.resolution_y;
    const videoRef = useRef();
    const timeRef = useRef();

    const fetchApi = async () => {
        if (direction === 'forYouVideos' || direction === 'followingVideos') {
            const res = await ForYouVideos(currentPage, page, token);
            if (res) {
                setVideos({
                    ...videos,
                    videoList: [...videoList, ...res],
                    loadPage: page,
                });
            }
        }
        if (direction === 'profileVideos') {
            const res = await GetUsersVideos(userID, page, token);
            if (res) {
                setVideos({
                    ...videos,
                    videoList: [...videoList, ...res],
                    loadPage: page,
                });
            }
        }
        if (!direction) {
            window.location.href = 'http://isha.ml//';
        }
        setLoadMore(false);
    };

    const handlePlayVideo = () => {
        setPlay(!play);
        play ? videoRef.current.play() : videoRef.current.pause();
    };
    const handleClose = () => {
        setVideos({
            ...videos,
            index: currentIndex,
        });
    };
    const handleVolume = (e) => {
        e.stopPropagation();
        setShowVolume(!showVolume);
        if (showVolume === false) setVolume(0);
        else setVolume(vol);
    };
    const handleNextVideo = (e, direction) => {
        e.stopPropagation();
        if (direction === 'prev') {
            setCurrentIndex(() => (currentIndex === 0 ? 0 : currentIndex - 1));
        } else {
            if (currentIndex === videoList.length - 2) {
                setPage((prev) => prev + 1);
                setLoadMore(true);
            }
            setPlay(false);
            setCurrentIndex(() => (currentIndex < videoList.length - 1 ? currentIndex + 1 : currentIndex));
        }
    };

    useEffect(() => {
        const getData = async () => {
            const newArr = [];
            for (var i = 1; i <= page; i++) {
                const res = await ForYouVideos('for-you', i, token);
                if (res.length > 0) newArr.push(...res);
                setLogInState(false);
            }
            setVideos({
                ...videos,
                videoList: [...newArr],
                loadPage: page,
            });
        };
        if (isLogin && logInState) {
            getData();
        }

        // eslint-disable-next-line
    }, [isLogin]);
    useEffect(() => {
        if (loadMore || videoList.length === 0) fetchApi();
        // eslint-disable-next-line
    }, [loadMore]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.ontimeupdate = (e) => {
                const durationTime = e.target.duration;
                const currentTime = e.target.currentTime;
                const seconds = Math.floor(currentTime % 60);
                const minutes = Math.floor((currentTime - seconds) / 60);
                const currentTimeLine = Math.floor(currentTime / (durationTime / 100));
                e.target.volume = volume;

                setTimeLine(currentTimeLine);

                setCurrentTime({
                    seconds: seconds > 9 ? seconds : `0${seconds}`,
                    minutes: minutes > 9 ? minutes : `0${minutes}`,
                });
            };
        }

        // eslint-disable-next-line
    }, [currentTime]);
    useEffect(() => {
        if (videoRef.current) {
            setTimeout(() => {
                const duration = videoRef.current.duration || 0;
                const durationSeconds = Math.floor(duration % 60);
                const durationMinutes = Math.floor((duration - durationSeconds) / 60);
                setDurationTime({
                    seconds: durationSeconds > 9 ? durationSeconds : `0${durationSeconds}`,
                    minutes: durationMinutes > 9 ? durationMinutes : `0${durationMinutes}`,
                });
            }, 100);
        }
    }, []);
    if (videoList.length > 0) {
        return (
            <div className={cx('view-wrap')}>
                <div
                    onMouseOver={() => setShowControls(true)}
                    onMouseLeave={() => setShowControls(false)}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${videoList[currentIndex]?.thumb_url})`,
                    }}
                    className={cx('video-player')}
                    onClick={handlePlayVideo}
                >
                    <div
                        className={cx('video-wrap')}
                        style={videoWidth > videoHeight ? { width: '100%' } : { height: '100%' }}
                    >
                        <video
                            ref={videoRef}
                            className={cx('video')}
                            src={videoList[currentIndex]?.file_url}
                            autoPlay
                            muted={showVolume}
                            loop
                        />
                    </div>
                    <div className={cx('video-controler')} style={{ opacity: showControls ? 1 : 0 }}>
                        <div ref={timeRef} className={cx('time-line')}>
                            <span className={cx('time-line_action')}>
                                <span style={{ width: `${timeLine}%` }}></span>
                            </span>
                            <input
                                className={cx('time-line_btn')}
                                type="range"
                                min={0}
                                max={100}
                                value={timeLine || 0}
                                step={1}
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                                onInput={(e) => {
                                    videoRef.current.currentTime = (videoRef.current.duration / 100) * e.target.value;
                                }}
                            />
                        </div>
                        <div className={cx('current-time')}>
                            {currentTime.minutes}:{currentTime.seconds}/{durationTime.minutes}:{durationTime.seconds}
                        </div>
                    </div>
                    <span style={{ opacity: play ? 1 : 0 }} className={cx('play-btn')}>
                        <Icons.Play />
                    </span>
                    <Link to={config.routes[route]} className={cx('close-btn')} onClick={handleClose}>
                        <Icons.Clear />
                    </Link>
                    <div className={cx('right-btn-wrap')}>
                        <div className={cx('volume')}>
                            <span className={cx('volume-range')}>
                                <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step={0.01}
                                    value={volume}
                                    onClick={(e) => e.stopPropagation()}
                                    onInput={(e) => {
                                        setVolume(e.target.value);
                                        localStorage.setItem('vol', JSON.stringify(e.target.value));
                                        if (e.target.value > 0) setShowVolume(false);
                                        else setShowVolume(true);
                                    }}
                                />
                            </span>
                            <span onClick={handleVolume} className={cx('volume-off')}>
                                {showVolume ? <Icons.MuteOn /> : <Icons.MuteOff />}
                            </span>
                        </div>

                        <div className={cx('direction-btn')}>
                            <button
                                className={cx('prev-btn')}
                                style={{ opacity: currentIndex === 0 ? 'none' : '' }}
                                onClick={(e) => handleNextVideo(e, 'prev')}
                            >
                                <Icons.Up />
                            </button>
                            <button className={cx('next-btn')} onClick={(e) => handleNextVideo(e, 'next')}>
                                <Icons.Down />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx('video-info')}>
                    <Comments
                        video={videoList[currentIndex]}
                        videos={videoList}
                        setVideos={setVideos}
                        token={token}
                        setNickName={setNickName}
                        currentIndex={currentIndex}
                    />
                </div>
            </div>
        );
    }
}
export default ViewPage;
