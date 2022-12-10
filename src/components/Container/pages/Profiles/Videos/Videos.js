import { useState, memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Videos.module.scss';
import Icons from '~/components/asset/Icons';
import config from '~/config';
import { Consumer } from '~/Context';
import { GetUsersVideos } from '~/services';

const cx = classNames.bind(styles);
function Videos({ profile, myProf, page }) {
    const [data, setData] = useState([]);
    const [is_hover, setIs_hover] = useState(undefined);
    const [autoPlay, setAutoPlay] = useState(true);
    const ConsumerData = Consumer();
    const [, setProfileVideos] = ConsumerData.profileVideos;
    const [, setDirection] = ConsumerData.direction;
    const [height, setHeight] = useState(undefined);

    const GetVideos = async () => {
        // const res = await GetUsersVideos(profile.id, page);
        // if (res) {
        //     setData((prev) => [...prev, ...res]);
        // }
        setData(profile.videos);
    };
    console.log(page);
    useEffect(() => {
        if (page && profile.id) GetVideos();
    }, [profile]);
    useEffect(() => {
        if (page && profile.id) {
            console.log('is_here');
            GetVideos();
        }
    }, [page]);

    useEffect(() => {
        const width = document.getElementById('video_wrap0');
        window.onresize = () => {
            setHeight(width.offsetWidth * 1.5);
        };
    }, [height]);

    const handleSubmitVideo = (data, index) => {
        setDirection('profileVideos');
        setProfileVideos({
            videoList: data,
            index,
            route: 'profiles',
            userID: profile.id,
            page,
        });
        localStorage.setItem('videoSource', JSON.stringify('profileVideos'));
        localStorage.setItem('videos', JSON.stringify(data));
        localStorage.setItem('index', JSON.stringify(index));
        localStorage.setItem('route', JSON.stringify('profiles'));
    };

    const videoList = data?.map((video, index) => {
        return (
            <Link
                onMouseOver={() => {
                    setIs_hover(index);
                    setAutoPlay(false);
                }}
                onMouseLeave={() => {
                    setIs_hover(undefined);
                    setAutoPlay(false);
                }}
                onClick={() => handleSubmitVideo(data, index)}
                key={index}
                to={config.routes.video}
                id={`video_wrap${index}`}
                className={cx('video-item_wrap')}
                style={{ height: height }}
            >
                <div className={cx('video-item')} style={{ backgroundImage: `url("${video.thumb_url}")` }}>
                    {is_hover === index || (index === 0 && autoPlay) ? (
                        <video autoPlay={true} loop={true} muted={true} src={video.file_url} />
                    ) : null}
                    <div className={cx('views-count')}>
                        <Icons.PlayViews />
                        <span>{video.views_count}</span>
                    </div>
                </div>
                <p className={cx('video-title')}>{video ? video.description : ''}</p>
            </Link>
        );
    });
    return (
        <div id={'video_list'} className={cx('videos-list')}>
            {videoList}
        </div>
    );
}
export default memo(Videos);
