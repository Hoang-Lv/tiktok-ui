import { useEffect, useState } from 'react';
import { Consumer } from '~/Context';
import classNames from 'classnames/bind';
import styles from './Profiles.module.scss';
import Header from './Header';
import Container from './Container';
import { GetUser } from '~/services';
import ShowLoading from '~/components/ShowLoading';
const cx = classNames.bind(styles);
function Profiles() {
    const context = Consumer();
    let [nickName] = context.nickName;
    const [token] = context.token;
    const [isLogin] = context.isLogin;
    const [authMe] = context.auth;
    const [myProf, setMyProf] = useState(false);
    const [data, setData] = useState({});
    const [page, setPage] = useState(1);
    const [showLoading, setShowLoading] = useState(true);
    if (nickName.length == 0) nickName = JSON.parse(localStorage.getItem('nickname'));
    const fetchApi = async () => {
        setShowLoading(true);
        const res = await GetUser(nickName, token);
        setData(res);
        setShowLoading(false);
    };
    useEffect(() => {
        if (isLogin) {
            fetchApi();
            if (nickName === authMe.nickname) {
                setData(authMe);
                setMyProf(true);
            }
        }
    }, [isLogin]);
    useEffect(() => {
        if (nickName === authMe.nickname) {
            setData(authMe);
            setMyProf(true);
            setPage(1);
        } else {
            fetchApi();
            setMyProf(false);
            setPage(1);
        }
    }, [nickName]);
    return (
        <div
            className={cx('profile')}
            onScroll={(e) => {
                const list = e.target;
                const listTop = list.offsetHeight;
                const heightResult = list.children[1].clientHeight + list.children[0].clientHeight;
                const result = heightResult - (list.offsetHeight + list.scrollTop - 104);
                if (result == 0) {
                    setPage((prev) => prev + 1);
                }
            }}
        >
            <Header myProf={myProf} profile={data} />
            <Container myProf={myProf} profile={data} page={page} setPage={setPage} />
            {showLoading ? <ShowLoading /> : ''}
        </div>
    );
}
export default Profiles;
