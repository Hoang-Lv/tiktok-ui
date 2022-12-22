import { useState } from 'react';

import LoadVideo from './LoadVideo';
import { Consumer } from '~/Context';
import classname from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classname.bind(styles);

function Home() {
    const context = Consumer();
    const [isLogin] = context.isLogin;
    const [token] = context.token;
    const [forYouVideos, setForYouVideos] = context.forYouVideos;
    let { videoList, index, loadPage } = forYouVideos;
    const [data, setData] = useState(videoList || []);
    return (
        <div className={cx('home-content')}>
            <LoadVideo
                data={data}
                setData={setData}
                currentPage={loadPage}
                index={index || 0}
                isLogin={isLogin}
                token={token}
                setForYouVideos={setForYouVideos}
            />
        </div>
    );
}
export default Home;
