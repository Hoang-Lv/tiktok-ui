import { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper } from '~/components/Popper';

import Avatars from '~/components/asset/Avatars';
import Icons from '~/components/asset/Icons';
import Button from '~/components/Button';

import config from '~/config';
import {
    LikePost,
    Follow,
    GetComment,
    GetaVideo,
    LikeAComment,
    CreateAComment,
    DeleteAComment,
    search,
    SuggestedAcc,
    Followings,
} from '~/services';
import { Consumer } from '~/Context';

import classname from 'classnames/bind';
import styles from './Comments.module.scss';
const cx = classname.bind(styles);

const Emoji = [
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '🥹',
    '😅',
    '😂',
    '🤣',
    '🥲',
    '😊',
    '😇',
    '🙂',
    '🙃',
    '😉',
    '😌',
    '😍',
    '🥰',
    '😘',
    '😗',
    '😙',
    '😚',
    '😋',
    '😛',
    '😝',
    '😜',
    '🤪',
    '🤨',
    '🤩',
    '🥳',
    '😞',
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '🥹',
    '😅',
    '😂',
    '🤣',
    '🥲',
    '😊',
    '😇',
    '🙂',
    '🙃',
    '😉',
    '😌',
    '😍',
    '🥰',
    '😘',
    '😗',
    '😙',
    '😚',
    '😋',
    '😛',
    '😝',
    '😜',
    '🤪',
    '🤨',
    '🤩',
    '🥳',
    '😞',
];
const popularEmoji = ['😀', '😅', '😍', '🥰', '😝'];

function Comments({ video, videos, setVideos, setNickName }) {
    const user = video?.user;
    const href = window.location.href;

    const consumer = Consumer();
    const [token] = consumer.token;
    const [, setLoginPopper] = consumer.loginPopper;
    const [isLogin] = consumer.isLogin;
    const [authMe] = consumer.auth;
    const [likeState, setLikeState] = useState();
    const [likesCound, setLikesCound] = useState();
    const [comments, setComments] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isFollowed, setIsFollowed] = useState(user?.is_followed);
    const [showOptions, setShowOptions] = useState(false);
    const [commentID, setCommentID] = useState(-1);
    const [showEmoji, setShowEmoji] = useState(false);
    const [frientList, setFrientList] = useState([]);
    const [showUserTags, setShowUserTags] = useState(false);
    const [placementTag, setPlacementTag] = useState({ placement: -1, key: '' });

    const GetUsers = async () => {
        if (isLogin) {
            const res = await Followings(1, token);
            if (res) {
                setShowUserTags(true);
                setFrientList(res);
            } else setShowUserTags(false);
        } else {
            const res = await SuggestedAcc(1, 5);
            if (res) {
                setShowUserTags(true);
                setFrientList(res);
            } else setShowUserTags(false);
        }
    };
    const SearchUsers = async () => {
        const res = await search(placementTag.key, 'more', token);
        if (res.length > 0) {
            setFrientList(res);
            setShowUserTags(true);
        } else {
            setFrientList([]);
            setShowUserTags(false);
        }
    };

    const GetaVideoApi = async () => {
        const liked = await GetaVideo(video.uuid, token);
        setIsFollowed(liked.user.is_followed);
        setLikeState(liked.is_liked);
        setLikesCound(liked.likes_count);
    };
    const GetCommentApi = async () => {
        const res = await GetComment(video.id, token);
        if (res) setComments([...res]);
    };
    const handleLike = () => {
        if (token.length > 0) {
            const fetchApi = async (type) => {
                const res = await LikePost(video.id, type, token);
                const newArr = [];
                videos.forEach((item) => {
                    if (item.id === res.id) {
                        newArr.push({ ...res });
                    } else {
                        newArr.push(item);
                    }
                });
                setVideos((prev) => ({ ...prev, videoList: newArr }));
            };
            if (likeState) {
                fetchApi('unlike');
                setLikeState(false);
                setLikesCound(likesCound - 1);
            } else {
                fetchApi('like');
                setLikeState(true);
                setLikesCound(likesCound + 1);
            }
        } else {
            setLoginPopper(true);
        }
    };
    const handleLikeComment = (liked, id, index) => {
        if (token.length > 0) {
            const fetchApi = async (type) => {
                const res = await LikeAComment(id, type, token);
                if (res) {
                    comments.splice(index, 1, res);
                    const newArr = [...comments];
                    setComments(newArr);
                }
            };
            if (liked) {
                fetchApi('unlike');
            } else {
                fetchApi('like');
            }
        } else {
            setLoginPopper(true);
        }
    };
    const handlePostComment = async () => {
        if (isLogin) {
            if (inputValue.length > 0) {
                const res = await CreateAComment(video.uuid, token, inputValue);

                setComments([res, ...comments]);
                setInputValue('');
            }
        } else {
            setLoginPopper(true);
        }
    };
    const handleRemoveComment = () => {
        setShowOptions(false);
        DeleteAComment(commentID, token);
        GetCommentApi();
    };
    const handleInputValue = (e) => {
        const value = e.target.value;
        setInputValue(value);
        const placement = value.lastIndexOf('@');
        if (placement !== -1) {
            if (frientList.length === 0) {
                GetUsers();
            }
            setPlacementTag({ placement, key: value.slice(placement + 1) });
        } else {
            setFrientList([]);
            setShowUserTags(false);
        }
    };

    const handleShowOptions = () => {
        // const modal = document.getElementById('modal');
        // const overlay = document.getElementById('modal-overlay');
        // const options = document.getElementById('modal-container');
        if (showOptions) {
            setShowOptions(false);
        } else {
            setShowOptions(true);
        }
    };
    const handleAnswer = (f, l) => {
        document.getElementById('input').focus();
        setInputValue(`@${f} ${l} : `);
    };
    const handleFrientTag = () => {
        document.getElementById('input').focus();
        setInputValue((prev) => `${prev} @`);
    };
    const handleSetEmoji = (e) => {
        const item = e.target;
        setInputValue((prev) => `${prev}${item.innerText}`);
        document.getElementById('input').focus();
    };
    window.onclick = function () {
        if (showEmoji) setShowEmoji(false);
    };
    useEffect(() => {
        setComments([]);
        GetaVideoApi();
        setInputValue('');
        if (isLogin) GetCommentApi();
        // eslint-disable-next-line
    }, [video.id]);
    useEffect(() => {
        if (isLogin) {
            setComments([]);
            GetCommentApi();
            GetaVideoApi();
        }
        // eslint-disable-next-line
    }, [isLogin]);
    useEffect(() => {
        if (placementTag.key.length > 0) {
            SearchUsers();
        }

        // eslint-disable-next-line
    }, [placementTag]);

    window.onkeyup = function (e) {
        if (e.which === 13 && inputValue.length > 0) {
            handlePostComment();
        } else {
        }
    };
    return (
        <div className={cx('comments')}>
            <div className={cx('comments-header')}>
                <div className={cx('user-info')}>
                    <Link
                        className={cx('user-avatar')}
                        to={config.routes.profiles}
                        onClick={() => {
                            setNickName(user.nickname);
                        }}
                    >
                        <Avatars src={user.avatar} width={40} height={40} />
                    </Link>
                    <Link
                        className={cx('name')}
                        to={config.routes.profiles}
                        onClick={() => {
                            setNickName(user.nickname);
                        }}
                    >
                        <div className={cx('fullname-and-check')}>
                            <h4>
                                {user.first_name} {user.last_name}
                            </h4>
                            <span>
                                <Icons.Check />
                            </span>
                        </div>
                        <div className={cx('nickname-and-time')}>
                            <p className={cx('nickname')}>{user.nickname}</p>
                            <p>{video.updated_at}</p>
                        </div>
                    </Link>
                    <div className={cx('follow-btn')}>
                        <Button
                            type={'follow'}
                            loginType
                            content={isFollowed ? 'Đang follow' : 'Follow'}
                            width={106}
                            height={36}
                            btnStyle={isFollowed ? 'basic_style-followings' : 'primary-color--border_style'}
                            onClick={() => {
                                setIsFollowed(!isFollowed);
                                Follow(user.id, isFollowed ? 'unfollow' : 'follow', token);
                            }}
                        />
                    </div>
                </div>
                <div className={cx('video-info')}>
                    <div className={cx('description')}>{video.description}</div>
                    <div className={cx('music')}>{video.music}</div>
                    <div className={cx('connect-with-user')}>
                        <div className={cx('connect-and-action')}>
                            <div className={cx('actions')}>
                                <button onClick={handleLike}>
                                    <span className={cx('like-action', 'action', { active: likeState })}>
                                        <Icons.Heart />
                                    </span>
                                    <strong className={cx('liked-count', 'count')}>{likesCound}</strong>
                                </button>
                                <button>
                                    <span className={cx('comment-action', 'action')}>
                                        <Icons.Comment />
                                    </span>
                                    <strong className={cx('comment-count', 'count')}>{video.comments_count}</strong>
                                </button>
                            </div>
                            <div className={cx('connect-methods')}>
                                <a href="/">
                                    <Icons.Tag />
                                </a>
                                <a href="/">
                                    <Icons.MessageSolid />
                                </a>
                                <a href="/">
                                    <Icons.Line />
                                </a>
                                <a href={'https://www.facebook.com/'}>
                                    <Icons.Facebook />
                                </a>
                                <a href="/">
                                    <Icons.Twitter />
                                </a>
                                <a href="/">
                                    <Icons.Share />
                                </a>
                            </div>
                        </div>
                        <div className={cx('copy-link')}>
                            <p>{href}</p>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(href);
                                }}
                            >
                                Sao chép liên kết
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('comment-list')}>
                {comments?.map((item, index) => {
                    const { id, comment, is_liked, likes_count, updated_at, user } = item;
                    const { first_name, last_name, avatar, tick } = user;
                    return (
                        <div className={cx('comment-item')} key={index}>
                            <div className={cx('avatar')}>
                                <Avatars src={avatar} width={40} height={40} />
                            </div>
                            <div className={cx('user-name_and_comments')}>
                                <div className={cx('user-name-wrap')}>
                                    <h4 className={cx('fullname')}>
                                        {first_name} {last_name}
                                    </h4>
                                    {tick ? <span>{<Icons.Check />}</span> : ''}
                                </div>
                                <p className={cx('comment-content')}>{comment}</p>
                                <div className={cx('timer-and-answer')}>
                                    <span className={cx('timer')}>{updated_at}</span>
                                    <span className={cx('answer')} onClick={() => handleAnswer(first_name, last_name)}>
                                        Trả lời
                                    </span>
                                </div>
                            </div>
                            <div className={cx('comment-action')}>
                                <Tippy
                                    // parent={document.body}
                                    interactive
                                    offset={[8, 6]}
                                    delay={[0, 200]}
                                    placement="bottom-end"
                                    render={(attrs) => (
                                        <Wrapper tabIndex="-1" {...attrs}>
                                            <div className={cx('option-list')}>
                                                <div
                                                    className={cx('option-item')}
                                                    onClick={() => {
                                                        if (user.id === authMe.id) {
                                                            setCommentID(id);
                                                            handleShowOptions();
                                                        } else {
                                                            alert('Error');
                                                        }
                                                    }}
                                                >
                                                    {user.id === authMe.id ? <Icons.Trash /> : <Icons.Flag />}
                                                    {user.id === authMe.id ? (
                                                        <strong>Xóa</strong>
                                                    ) : (
                                                        <strong>Báo cáo</strong>
                                                    )}
                                                </div>
                                            </div>
                                        </Wrapper>
                                    )}
                                >
                                    <span className={cx('options')}>
                                        <Icons.ThreeDots />
                                    </span>
                                </Tippy>

                                <div
                                    className={cx('like-wrap')}
                                    onClick={() => {
                                        handleLikeComment(is_liked, id, index);
                                    }}
                                >
                                    <span className={cx('like-btn')}>
                                        {is_liked ? (
                                            <Icons.CommentHeartSolid width={'2rem'} height={'2rem'} />
                                        ) : (
                                            <Icons.CommentHeart width={'2rem'} height={'2rem'} />
                                        )}
                                    </span>
                                    <span className={cx('liked-count')}>{likes_count}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cx('create-commment')}>
                <Tippy
                    visible={showUserTags}
                    appendTo={document.body}
                    interactive={true}
                    placement={'top-start'}
                    offset={[20, 15]}
                    onClickOutside={() => {
                        setShowUserTags(false);
                    }}
                    render={(attrs) => {
                        return (
                            <Wrapper tabIndex="-1" {...attrs}>
                                <div className={cx('frient-list')}>
                                    {frientList.map((item, index) => (
                                        <div
                                            key={index + item.id}
                                            className={cx('frient-item--wrap')}
                                            onClick={() => {
                                                setInputValue(
                                                    (prev) =>
                                                        `${inputValue.slice(0, placementTag.placement + 1)}${
                                                            item.nickname
                                                        }`,
                                                );
                                                setFrientList([]);
                                                setShowUserTags(false);
                                                setPlacementTag({ placement: -1, key: '' });
                                                document.getElementById('input').focus();
                                            }}
                                        >
                                            <div className={cx('frient-item')}>
                                                <div className={cx('frient-avatar')}>
                                                    <Avatars src={item.avatar} width={40} height={40} />
                                                </div>
                                                <div className={cx('frient-name')}>
                                                    <p className={cx('frient-fullname')}>
                                                        <span className={cx('fullname')}>
                                                            {item.first_name} {item.last_name}
                                                        </span>
                                                        {item.is_followed ? (
                                                            <span className={cx('follow-state')}>Đang Follow</span>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </p>
                                                    <span className={cx('nickname')}>{item.nickname}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Wrapper>
                        );
                    }}
                >
                    <div className={cx('input-wrap')}>
                        <input
                            id="input"
                            placeholder="Thêm bình luận..."
                            value={inputValue}
                            onChange={handleInputValue}
                        />
                        <span className={cx('frient-tag_icon')} onClick={handleFrientTag}>
                            <Icons.FrientTag width={22} height={22} />
                        </span>
                        <Tippy
                            visible={showEmoji}
                            appenTo={document.body}
                            interactive={true}
                            placement={'top-end'}
                            offset={[20, 15]}
                            render={(attrs) => {
                                return (
                                    <Wrapper tabIndex="-1" {...attrs}>
                                        <div className={cx('emoji-wrap')}>
                                            <div className={cx('emoji-list')}>
                                                {Emoji.map((item, index) => (
                                                    <span
                                                        key={index + item.id}
                                                        className={cx('emoji-item')}
                                                        onClick={handleSetEmoji}
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className={cx('emoji-history')}>
                                                {popularEmoji.map((item, index) => (
                                                    <span
                                                        key={index + item.id}
                                                        className={cx('emoji-item')}
                                                        onClick={handleSetEmoji}
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Wrapper>
                                );
                            }}
                        >
                            <span
                                className={cx('emoj_icon')}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowEmoji(!showEmoji);
                                }}
                            >
                                <Icons.Smile width={22} height={22} />
                            </span>
                        </Tippy>
                    </div>
                </Tippy>
                <div
                    className={cx('post-btn')}
                    style={inputValue?.length > 0 ? { color: 'var(--primary-color)', cursor: 'pointer' } : {}}
                    onClick={handlePostComment}
                >
                    Đăng
                </div>
            </div>
            <div id={'modal'} className={cx('modal', { active: showOptions })}>
                <div id="modal-overlay" className={cx('modal-overlay')}></div>
                <div id="modal-container" className={cx('modal-container')}>
                    <div className={cx('modal-content')}>
                        <div className={cx('modal-content_title')}>Bạn có chắc chắn muốn xóa bình luận này?</div>
                        <div className={cx('modal-content_options')}>
                            <button className={cx('delete-btn')} onClick={handleRemoveComment}>
                                Xóa
                            </button>
                            <button className={cx('cancel-btn')} onClick={handleShowOptions}>
                                Hủy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default memo(Comments);
