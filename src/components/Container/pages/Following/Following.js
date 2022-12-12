import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoadVideo from './LoadVideo';
import Button from '~/components/Button';
import Icons from '~/components/asset/Icons';
import config from '~/config';
import ShowLoading from '~/components/ShowLoading';

import { Consumer } from '~/Context';
import { SuggestedAcc } from '~/services';
import classname from 'classnames/bind';
import styles from './Following.module.scss';
const cx = classname.bind(styles);

function Following() {
    const context = Consumer();
    const [isLogin] = context.isLogin;
    const [token] = context.token;
    const [, setNickName] = context.nickName;
    const [followingVideos] = context.followingVideos;
    const { videoList, index, loadPage } = followingVideos || {};
    const [data, setData] = useState(videoList || []);
    const [page, setPage] = useState(1);
    const [loadMore, setLoadMore] = useState(false);
    const [accList, setAccList] = useState([]);
    const [showVideo, setShowVideo] = useState(null);
    const [showLoading, setShowLoading] = useState(true);
    const fetchApi = async () => {
        setShowLoading(true);
        const res = await SuggestedAcc(page, 20);
        if (res.length > 0) {
            setAccList((prev) => [...prev, ...res]);
            setLoadMore(false);
            setShowLoading(false);
        }
    };
    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        const accList = document.getElementById('account-list').offsetHeight;
        if (accList - (scrollTop + e.target.offsetHeight) < 0) {
            setPage((prev) => prev + 1);
            setLoadMore(true);
        }
    };

    useEffect(() => {
        if (loadMore) {
            fetchApi();
        }
        // eslint-disable-next-line
    }, [loadMore]);
    useEffect(() => {
        if (!isLogin) {
            fetchApi();
        }
        // eslint-disable-next-line
    }, [isLogin]);

    return (
        <div className={cx('home-content', { active: isLogin })}>
            {isLogin ? (
                <LoadVideo
                    data={data}
                    setData={setData}
                    currentPage={loadPage}
                    index={index}
                    isLogin={isLogin}
                    token={token}
                />
            ) : (
                <div className={cx('account-list_wrap')} onScroll={handleScroll}>
                    <div id={'account-list'} className={cx('account-list')}>
                        {accList.map((acc, index) => {
                            return (
                                <Link
                                    target={'_blank'}
                                    to={config.routes.profiles}
                                    className={cx('account-item')}
                                    onMouseOver={(e) => setShowVideo(index)}
                                    onClick={() => {
                                        setNickName(acc.nickname);
                                    }}
                                    key={index}
                                >
                                    <div
                                        className={cx('account-item_wrap')}
                                        style={{ backgroundImage: `url(${acc.popular_video.thumb_url})` }}
                                    >
                                        {showVideo === index ? (
                                            <video autoPlay={true} muted={true}>
                                                <source src={acc.popular_video.file_url} />
                                            </video>
                                        ) : (
                                            ''
                                        )}
                                        <div className={cx('users-info')}>
                                            <h2 className={cx('users-fullname')}>
                                                {acc.first_name} {acc.last_name}
                                            </h2>
                                            <div className={cx('users-nickname')}>
                                                <p>{acc.nickname}</p>
                                                {acc.tick ? (
                                                    <span>
                                                        <Icons.Check />
                                                    </span>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                            <Button
                                                type={'follow'}
                                                loginType
                                                width={164}
                                                height={37}
                                                content={'Follow'}
                                                btnStyle={'primary-color_style'}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    {showLoading ? <ShowLoading /> : null}
                </div>
            )}
        </div>
    );
}
export default Following;
