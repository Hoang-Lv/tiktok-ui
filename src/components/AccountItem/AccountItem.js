import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWapper } from '~/components/Popper';
import PropTypes from 'prop-types';
import config from '~/config';
import classNames from 'classnames/bind';
import Icons from '../asset/Icons';
import style from './AccountItem.module.scss';
import Avatars from '../asset/Avatars';
import Button from '../Button';
import { Consumer } from '~/Context';
const cx = classNames.bind(style);
function AccountItem({ data, size, suggestedAcc, onClick }) {
    const [, setNickName] = Consumer().nickName;
    const { full_name, first_name, last_name, tick, id, avatar, nickname, is_followed, ...props } = data;

    const handleSubmitAcc = () => {
        setNickName(nickname);
        localStorage.setItem('nickname', JSON.stringify(nickname));
    };
    if (suggestedAcc) {
        return (
            <Tippy
                appendTo={document.body}
                // visible={true}
                interactive={true}
                offset={[-30, -27]}
                delay={[800, 0]}
                placement="bottom-start"
                render={() => (
                    <PopperWapper>
                        <div className={cx('tippy-wrap')}>
                            <div className={cx('tippy-header')}>
                                <Link
                                    onClick={handleSubmitAcc}
                                    className={cx('use-card_avatar')}
                                    to={`${config.routes.profiles}${nickname}`}
                                >
                                    <Avatars src={avatar} alt={full_name || `${first_name} ${last_name}`} />
                                </Link>
                                {is_followed ? (
                                    <Button
                                        content={'Đang Follow'}
                                        size="follow-size"
                                        btnStyle={'basic_style-following'}
                                    />
                                ) : (
                                    <Button content="Follow" btnStyle="primary-color_style" size="follow-size" />
                                )}
                            </div>
                            <Link
                                onClick={handleSubmitAcc}
                                className={cx('use-card_fullname')}
                                to={`${config.routes.profiles}${nickname}`}
                            >
                                <h4>{full_name || `${first_name} ${last_name}`}</h4>
                                {tick && (
                                    <span>
                                        <Icons.Check />
                                    </span>
                                )}
                            </Link>
                            <Link
                                onClick={handleSubmitAcc}
                                className={cx('use-card_nickname')}
                                to={`${config.routes.profiles}${nickname}`}
                            >
                                {nickname}
                            </Link>
                            <p className={cx('user-star')}>
                                <span className={cx('follower-count')}>48.8M</span>
                                <span className={cx('follower')}>Follower</span>
                                <span className={cx('like-count')}>1.4B</span>
                                <span className={cx('liked')}>Thích</span>
                            </p>
                        </div>
                    </PopperWapper>
                )}
            >
                <Link
                    className={cx('wrapper', size)}
                    to={`${config.routes.profiles}${nickname}`}
                    onClick={handleSubmitAcc}
                    {...props}
                >
                    <Avatars src={avatar} alt={full_name || `${first_name} ${last_name}`} />
                    <div className={cx('name_wrap')}>
                        <span>
                            <h4>{full_name || `${first_name} ${last_name}`}</h4>
                            {tick && (
                                <span>
                                    <Icons.Check />
                                </span>
                            )}
                        </span>
                        <p>{nickname}</p>
                    </div>
                </Link>
            </Tippy>
        );
    } else {
        return (
            <div onClick={onClick}>
                <Link
                    className={cx('wrapper', size)}
                    to={`${config.routes.profiles}${nickname}`}
                    onClick={handleSubmitAcc}
                    {...props}
                >
                    <Avatars src={avatar} alt="name" />
                    <div className={cx('name_wrap')}>
                        <span>
                            <h4>{full_name || `${first_name} ${last_name}`}</h4>
                            {tick && (
                                <span>
                                    <Icons.Check />
                                </span>
                            )}
                        </span>
                        <p>{nickname}</p>
                    </div>
                </Link>
            </div>
        );
    }
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default AccountItem;
