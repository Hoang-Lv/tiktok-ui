import React, { useState, useEffect } from 'react';
import ShowLoading from '~/components/ShowLoading';
import { ForYouVideos } from '~/services';
import { Consumer } from '~/Context';
import VideoElement from '../VideoElement';
import NextTop from '~/components/NextTop';
import classname from 'classnames/bind';
import styles from './LoadVideo.module.scss';
const cx = classname.bind(styles);

function InfiniteList(props) {
    const localVolume = Number(JSON.parse(localStorage.getItem('vol')));
    const localMuted = JSON.parse(localStorage.getItem('muted'));
    const [volume, setVolume] = useState(localVolume || 0);
    const [muted, setMuted] = useState(localMuted || true);
    const consumer = Consumer();
    const [, setForYouVideos] = consumer.forYouVideos;
    const [, setDirection] = consumer.direction;
    const [logInState, setLogInState] = consumer.logInState;
    const [logOutState, setLogOutState] = consumer.logOutState;
    const [loadMore, setLoadMore] = useState(props.data.length === 0);
    const [loadPage, setLoadPage] = useState(props.data.currentPage || 1);
    const [showLoading, setShowLoading] = useState(false);
    const [autoPlay, setAutoPlay] = useState(0);
    const [nextTop, setNextTop] = useState(false);
    useEffect(() => {
        const getData = async (state) => {
            setShowLoading(true);
            const newArr = [];
            for (var i = 1; i <= loadPage; i++) {
                const res = await ForYouVideos('for-you', i, props.token);
                if (res.length > 0) newArr.push(...res);
            }
            props.setData(newArr);
            props.setForYouVideos((prev) => ({ ...prev, index: autoPlay }));
            if (state === 'login') {
                setLogInState(false);
            }
            if (state === 'logout') {
                setLogOutState(false);
            }
        };
        if (props.isLogin && logInState) {
            props.setData([]);
            getData('login');
            setLoadMore(true);
        }
        if (!props.isLogin && logOutState) {
            props.setData([]);
            getData('logout');
            setLoadMore(true);
        }
        // eslint-disable-next-line
    }, [props.isLogin]);

    const getData = async (load) => {
        if (load) {
            setShowLoading(true);
            const res = await ForYouVideos('for-you', loadPage, props.token);
            if (res.length > 0) {
                setShowLoading(false);
                props.setData([...props.data, ...res]);
            }
            setLoadMore(false);
        }
    };

    const handleSubmitViewPage = (data, index) => {
        setDirection('forYouVideos');
        setForYouVideos({
            videoList: data,
            index,
            currentPage: 'for-you',
            loadPage,
            route: 'home',
        });
        localStorage.setItem('videos', JSON.stringify(data));
        localStorage.setItem('index', JSON.stringify(index));
        localStorage.setItem('loadPage', JSON.stringify(loadPage));
        localStorage.setItem('videoSource', JSON.stringify('for-you'));
        localStorage.setItem('route', JSON.stringify('home'));
        localStorage.setItem('direction', JSON.stringify('forYouVideos'));
    };
    const handleScroll = (e) => {
        const el = e.target;
        const item = el.querySelectorAll('.content_item');
        if (item.length > 0) {
            const placement = item[0]?.getBoundingClientRect().top;
            for (var i = 0; i < item.length; i++) {
                const placementTop = item[i]?.getBoundingClientRect().top;
                const placementBottom = item[i]?.getBoundingClientRect().bottom;
                if (placementTop <= 310 && placementBottom >= 310) {
                    if (autoPlay !== i) {
                        setAutoPlay(i);
                    }
                }
            }

            if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
                setLoadMore(true);
                setLoadPage((prev) => prev + 1);
            }
            if (placement < -600) {
                if (!nextTop) setNextTop(true);
            } else {
                if (nextTop) setNextTop(false);
            }
        }
    };
    const handleNextTop = (e) => {
        const videoItem = document.querySelectorAll('.content_item');
        videoItem[0].scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        if (props.index && props.index !== 0) {
            const videoItem = document.querySelectorAll('.content_item');
            if (props.data.length > 0) {
                videoItem[props.index].scrollIntoView({
                    block: 'start',
                });
            }
        }
        // eslint-disable-next-line
    }, [props.index]);
    useEffect(() => {
        getData(loadMore);
        // eslint-disable-next-line
    }, [loadMore]);
    const Video = props.data.map((user, index) => (
        <div key={index} className={cx('content-item', 'content_item')}>
            <VideoElement
                setData={props.setData}
                users={props.data}
                data={user}
                index={index}
                localVolume={localVolume}
                volume={volume}
                setVolume={setVolume}
                setMuted={setMuted}
                muted={muted}
                state={autoPlay === index}
                poster={user.thumb_url}
                onClick={() => {
                    handleSubmitViewPage(props.data, index);
                }}
            />
        </div>
    ));
    return (
        <div id="content-list" className={cx('content-list')} onScroll={handleScroll}>
            {Video}
            {showLoading ? (
                <div className={cx('loading')}>
                    <ShowLoading />
                </div>
            ) : null}
            <NextTop onClick={handleNextTop} nextTop={nextTop} />
        </div>
    );
}
export default InfiniteList;
