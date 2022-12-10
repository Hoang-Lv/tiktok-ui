import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowLoading from '~/components/ShowLoading';
import { ForYouVideos } from '~/services';
import { Consumer } from '~/Context';
import VideoElement from '../VideoElement/VideoElement';
import NextTop from '~/components/NextTop';
import classname from 'classnames/bind';
import styles from './LoadVideo.module.scss';
const cx = classname.bind(styles);

function InfiniteList(props) {
    const localVolume = Number(JSON.parse(localStorage.getItem('vol')));
    const localMuted = JSON.parse(localStorage.getItem('muted'));
    const [volume, setVolume] = useState(localVolume || 0);
    const [muted, setMuted] = useState(localMuted || true);
    const ConsumerData = Consumer();
    const [, followingVideos] = ConsumerData.followingVideos;
    const [, setDirection] = ConsumerData.direction;
    const [state, setState] = ConsumerData.state;
    const [loadMore, setLoadMore] = useState(props.data.length === 0);
    const [loadPage, setLoadPage] = useState(props.data.currentPage || 1);
    const [showLoading, setShowLoading] = useState(false);
    const [autoPlay, setAutoPlay] = useState(0);
    const [nextTop, setNextTop] = useState(false);
    useEffect(() => {
        if (props.isLogin && state) {
            console.log('isHere');
            props.setData([]);
            setLoadPage(1);
            setLoadMore(true);
            setState(false);
        }
    }, [props.isLogin]);

    const getData = async (load) => {
        if (load) {
            setShowLoading(true);
            const res = await ForYouVideos('following', loadPage, props.token);
            if (res.length > 0) {
                setShowLoading(false);
                props.setData([...props.data, ...res]);
            }
        }
    };

    const handleSubmitViewPage = (data, index) => {
        setDirection('followingVideos');
        followingVideos({
            videoList: data,
            index,
            currentPage: 'following',
            loadPage,
            route: 'following',
        });
        localStorage.setItem('videos', JSON.stringify(data));
        localStorage.setItem('index', JSON.stringify(index));
        localStorage.setItem('videoSource', JSON.stringify('followingVideos'));
        localStorage.setItem('route', JSON.stringify('following'));
    };
    const handleScroll = (e) => {
        const el = e.target;
        const item = el.querySelectorAll('.content_item');
        if (item.length > 0) {
            const placement = item[0]?.getBoundingClientRect();
            const index = Math.floor(-((placement?.y - 400) / placement?.height));
            if (autoPlay !== index) {
                setAutoPlay(index);
            }

            if (el.scrollTop + el.clientHeight === el.scrollHeight) {
                setLoadMore(true);
                setLoadPage((prev) => prev + 1);
            }
            if (placement?.y < -654) {
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
            videoItem[props.index].scrollIntoView({
                block: 'start',
            });
        }
    }, []);
    useEffect(() => {
        getData(loadMore);
        setLoadMore(false);
    }, [loadMore]);
    const Video = props.data.map((users, index) => {
        return (
            <div key={index} className={cx('content-item', 'content_item')}>
                <VideoElement
                    data={users}
                    index={index}
                    localVolume={localVolume}
                    volume={volume}
                    setVolume={setVolume}
                    setMuted={setMuted}
                    muted={muted}
                    state={autoPlay === index}
                    poster={users.thumb_url}
                    onClick={() => {
                        handleSubmitViewPage(props.data, index);
                    }}
                />
            </div>
        );
    });

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
