import { useState, useEffect, memo } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { Consumer } from '~/Context';
import AccountItem from '~/components/AccountItem';
import config from '~/config';
const cx = classNames.bind(styles);

function Account({ api, title, suggestedAcc, discovery, following }) {
    const [seeAll, setSeeAll] = useState(false);
    const [data, setData] = useState([]);
    const consumer = Consumer();
    const [isLogin] = consumer.isLogin;
    const [token] = consumer.token;

    useEffect(() => {
        if (isLogin && following) {
            const fetchApi = async () => {
                if (seeAll) {
                    const res = await api(2, token);
                    setData((prev) => [...prev, ...res]);
                } else {
                    const res = await api(1, token);
                    setData(res);
                    console.log(token);
                    console.log(res);
                }
            };
            fetchApi();
        }
    }, [isLogin]);
    useEffect(() => {
        if (isLogin && following) {
            const fetchApi = async () => {
                if (seeAll) {
                    const res = await api(2, token);
                    setData((prev) => [...prev, ...res]);
                } else {
                    const res = await api(1, token);
                    setData(res);
                }
            };
            fetchApi();
        }
    }, [seeAll]);

    useEffect(() => {
        if (!following && isLogin) {
            const fetchApi = async () => {
                const Api = await api(1, 20);

                const newApi = [];
                if (seeAll) {
                    setData(Api);
                    return;
                } else {
                    Api?.forEach((item, index) => {
                        if (index < 6) newApi.push(item);
                        else return;
                    });
                    setData(newApi);
                    return;
                }
            };
            fetchApi();
        }
    }, [isLogin]);
    useEffect(() => {
        if (!following) {
            const fetchApi = async () => {
                const Api = await api(1, 20);

                const newApi = [];
                if (seeAll) {
                    setData(Api);
                    return;
                } else {
                    Api?.forEach((item, index) => {
                        if (index < 6) newApi.push(item);
                        else return;
                    });
                    setData(newApi);
                    return;
                }
            };
            fetchApi();
        }
    }, [seeAll]);

    const handleSeeAll = () => {
        setSeeAll(!seeAll);
    };
    return (
        <div className={cx('account')}>
            <p className={cx('title')}>{title}</p>
            <div className={cx('account-wrapper', { discovery })}>
                {data.map((item) => {
                    if (discovery) {
                        return (
                            <Link
                                key={item.id}
                                to={`${config.routes.profiles}${item.nickname}`}
                                className={cx('discovery-acc_item')}
                            >{`${item.full_name}-${item.nickname}`}</Link>
                        );
                    } else {
                        return <AccountItem suggestedAcc={suggestedAcc} key={item.id} size="small" data={item} />;
                    }
                })}
            </div>
            {discovery ? (
                ''
            ) : (
                <p onClick={handleSeeAll} className={cx('see-all')}>
                    {seeAll ? 'Ẩn bớt' : 'Xem tất cả'}
                </p>
            )}
        </div>
    );
}
export default memo(Account);
