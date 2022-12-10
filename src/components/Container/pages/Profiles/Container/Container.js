import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Container.module.scss';
import Icons from '~/components/asset/Icons';
import Videos from '../Videos';
const cx = classNames.bind(styles);

function Container({ profile, myProf, page }) {
    const [videoTag, setVideoTag] = useState(true);
    const [tag, setTag] = useState(0);
    return (
        <div className={cx('container', { container: true })}>
            <div className={cx('tab-wrap')}>
                <p
                    onClick={(e) => {
                        setVideoTag(true);
                        setTag(0);
                    }}
                    onMouseOver={(e) => {
                        setTag(0);
                    }}
                    onMouseLeave={(e) => {
                        setTag(videoTag ? 0 : 100);
                    }}
                    style={{ color: videoTag ? 'var(--text-color)' : 'rgba(22, 24, 35, 0.5)' }}
                    className={cx('video-tab')}
                >
                    <span>Video</span>
                </p>
                <p
                    onClick={(e) => {
                        setVideoTag(false);
                        setTag(100);
                    }}
                    onMouseOver={(e) => {
                        setTag(100);
                    }}
                    onMouseLeave={(e) => {
                        setTag(videoTag ? 0 : 100);
                    }}
                    style={{ color: !videoTag ? 'var(--text-color)' : 'rgba(22, 24, 35, 0.5)' }}
                    className={cx('liked-tab')}
                >
                    <Icons.Lock />
                    <span>Đã thích</span>
                </p>
                <div className={cx('bottom-line')} style={{ transform: `translateX(${tag}%)` }}></div>
            </div>
            {videoTag ? (
                <>
                    {myProf && !profile.videos ? (
                        <div className={cx('video-of-none')}>
                            <div className={cx('content-wrapper')}>
                                <span>
                                    <Icons.User />
                                </span>
                                <h1>Tải video đầu tiên của bạn lên</h1>
                                <p>Video của bạn sẽ xuất hiện tại đây</p>
                            </div>
                        </div>
                    ) : (
                        <Videos myProf={myProf} profile={profile} page={page} />
                    )}
                </>
            ) : (
                <>
                    {myProf ? (
                        ''
                    ) : (
                        <div className={cx('video-of-none')}>
                            <div className={cx('content-wrapper')}>
                                <span>
                                    <Icons.Lock />
                                </span>
                                <h1>Video đã thích của người dùng này ở trạng thái riêng tư</h1>
                                <p>Các video được thích bởi {profile.nickname} hiện đang ẩn</p>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
export default Container;
