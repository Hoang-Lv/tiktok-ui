import { useState, useEffect } from 'react';
import 'tippy.js/dist/tippy.css';
import { Consumer } from '~/Context';

import Icons from '~/components/asset/Icons';
import Rules from './Rules';
import BirtofDay from './BirtofDay';
import EmailandPass from './EmailandPass';
import { register, updateUser, Login } from '~/services';
import className from 'classnames/bind';
import styles from './Container.module.scss';
const cx = className.bind(styles);
const { Qrcode, User, KakaoTalk, Google, Facebook, Twitter, Line, Apple, Instagram } = Icons;
const loginOptions = [
    {
        icon: Qrcode,
        title: 'Sử dụng mã QR',
    },
    {
        icon: User,
        title: 'Số điện thoại / Email / Tiktok ID',
        loginForm: true,
    },
    {
        icon: KakaoTalk,
        title: 'Tiếp tục với KakaoTalk',
    },
    {
        icon: Google,
        title: 'Tiếp tục với Google',
    },
    {
        icon: Facebook,
        title: 'Tiếp tục với Facebook',
    },
    {
        icon: Twitter,
        title: 'Tiếp tục với Twitter',
    },
    {
        icon: Line,
        title: 'Tiếp tục với Line ',
    },
    {
        icon: Apple,
        title: 'Tiếp tục với Apple',
    },
    {
        icon: Instagram,
        title: 'Tiếp tục với Instagram',
    },
];
const registerOptions = [
    {
        icon: User,
        title: 'Sử dụng số điện thoại hoặc Email',
        rules: true,
    },
    {
        icon: KakaoTalk,
        title: 'Tiếp tục với KakaoTalk',
    },
    {
        icon: Google,
        title: 'Tiếp tục với Google',
    },
    {
        icon: Facebook,
        title: 'Tiếp tục với Facebook',
    },
    {
        icon: Twitter,
        title: 'Tiếp tục với Twitter',
    },
    {
        icon: Line,
        title: 'Tiếp tục với Line ',
    },
];

const calender = new Date();
// const currentMonth = calender.getMonth();
const currentYear = calender.getFullYear();
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const years = [];
for (var i = currentYear; i > 1900; i--) {
    years.push(i);
}
function Container({ type, typeofForm, formValue, setFormValue, setLoginPopper, setTypeofForm }) {
    const [token, setToken] = Consumer().token;
    const [authMe, setAuthMe] = Consumer().auth;
    const [, setIsLogin] = Consumer().isLogin;
    const [tiktokID, setTiktokID] = useState('');
    const [showOptions, setShowOptions] = useState(true);
    const [registerState, setRegisterState] = useState(false);
    const [formState, setFormState] = useState(false);
    const [err, setErr] = useState(false);
    const [emailAndPass, setEmailAndPass] = useState({
        email: '',
        password: '',
    });
    const [birthday, setBirthday] = useState({
        day: null,
        month: null,
        year: null,
    });

    const getDayInMonth = new Date(birthday.year, birthday.month, 0).getDate();
    const days = [];
    for (var i = 1; i <= getDayInMonth; i++) {
        days.push(i);
    }

    useEffect(() => {
        if (!formValue) {
            setEmailAndPass({ email: '', password: '' });
            setBirthday({
                day: null,
                month: null,
                year: null,
            });
        }
    }, [formValue]);
    useEffect(() => {
        if (emailAndPass.email.length > 0 && emailAndPass.password.length > 0) {
            setFormState(true);
            setRegisterState(false);
        } else setFormState(false);
    }, [emailAndPass]);
    const handleLogin = () => {
        if (formState) {
            const fetchApi = async () => {
                const dataForm = {
                    ...emailAndPass,
                };
                const res = await Login(dataForm);
                if (res) {
                    setAuthMe(res.data);
                    setToken(res.meta.token);
                    setLoginPopper(false);
                    setTypeofForm('login');
                    setIsLogin(true);
                } else {
                    setErr(true);
                }
            };
            fetchApi();
        }
    };
    const handleSubmitAcc = () => {
        if (formState) {
            const fetchApi = async () => {
                const dataForm = {
                    type: 'email',
                    ...emailAndPass,
                };
                const res = await register(dataForm);
                if (res) {
                    setToken(res.meta.token);
                    setAuthMe(res.data);
                    typeofForm('setID');
                    setIsLogin(true);
                } else {
                    setRegisterState(true);
                }
            };
            fetchApi();
        }
    };
    const handleSubmitTiktokID = () => {
        if (tiktokID.length > 0) {
            const data = {
                nickname: tiktokID,
            };

            const fetchApi = async () => {
                const res = await updateUser(token, data);
                if (res) {
                    setAuthMe(res.data);
                    setLoginPopper(false);
                    setTypeofForm('login');
                }
            };
            fetchApi();
        }
    };
    const handleInput = () => {
        const ruleBtn = document.querySelector('.rule_btn');
        const inputList = document.querySelectorAll('input[type="checkbox"]');
        let result;
        for (var i = 1; i < inputList.length - 1; i++) {
            result = inputList[i].checked;
            if (!result) break;
        }
        if (result) {
            inputList[0].checked = true;
            Object.assign(ruleBtn.style, {
                backgroundColor: 'var(--primary-color)',
                color: 'var(--white-to-black)',
                cursor: 'pointer',
            });
        } else {
            inputList[0].checked = false;
            Object.assign(ruleBtn.style, {
                backgroundColor: 'rgba(22, 24, 35, 0.06)',
                color: 'var(--text-gray-to-white3)',
                cursor: 'default',
            });
        }
    };
    switch (type) {
        case 'login':
            return (
                <>
                    <h1 className={cx('login-title')}>Đăng nhập vào TikTok</h1>
                    <ul className={cx('login-options')}>
                        {loginOptions.map((option, index) => {
                            return (
                                <li
                                    key={index}
                                    className={cx('options-item')}
                                    onClick={() => {
                                        if (option.loginForm) setTypeofForm('loginForm');
                                    }}
                                >
                                    <span className={cx('options-icon')}>
                                        <option.icon width={'2rem'} height={'2rem'} />
                                    </span>
                                    <p className={cx('option-name')}>{option.title}</p>
                                </li>
                            );
                        })}
                    </ul>
                </>
            );

        case 'register':
            return (
                <>
                    <h1 className={cx('login-title')}>Đăng Ký TikTok</h1>
                    <ul className={cx('login-options')}>
                        {registerOptions.map((option, index) => {
                            if (showOptions && index < 4) {
                                return (
                                    <li
                                        key={index}
                                        className={cx('options-item')}
                                        onClick={() => {
                                            if (option.rules) typeofForm('rules');
                                        }}
                                    >
                                        <span className={cx('options-icon')}>
                                            <option.icon width={'2rem'} height={'2rem'} />
                                        </span>
                                        <p className={cx('option-name')}>{option.title}</p>
                                    </li>
                                );
                            }
                            if (!showOptions) {
                                return (
                                    <li
                                        key={index}
                                        className={cx('options-item')}
                                        onClick={() => {
                                            if (option.rules) typeofForm('rules');
                                        }}
                                    >
                                        <span className={cx('options-icon')}>
                                            <option.icon width={'2rem'} height={'2rem'} />
                                        </span>
                                        <p className={cx('option-name')}>{option.title}</p>
                                    </li>
                                );
                            }
                        })}
                        {showOptions ? (
                            <span className={cx('show-options')} onClick={() => setShowOptions(false)}>
                                <Icons.Down />
                            </span>
                        ) : (
                            ''
                        )}
                    </ul>
                </>
            );

        case 'rules':
            return (
                <>
                    <h1 className={cx('login-title', { rules: true })}>Điều khoản và điều kiện</h1>
                    <div className={cx('rule-list')}>
                        <div className={cx('rule-item')}>
                            <div className={cx('rule-item_wrap')}>
                                <label htmlFor="checkbox-1" className={cx('rule-item_input')}>
                                    <input
                                        type="checkbox"
                                        id="checkbox-1"
                                        onChange={() => {
                                            const inputList = document.querySelectorAll('input[type="checkbox"]');
                                            const ruleBtn = document.querySelector('.rule_btn');

                                            for (var i = 1; i < inputList.length; i++) {
                                                inputList[i].checked = inputList[0].checked;
                                            }
                                            if (inputList[0].checked) {
                                                Object.assign(ruleBtn.style, {
                                                    backgroundColor: 'var(--primary-color)',
                                                    color: 'var(--white-color)',
                                                    cursor: 'pointer',
                                                });
                                            } else {
                                                Object.assign(ruleBtn.style, {
                                                    backgroundColor: 'rgba(22, 24, 35, 0.06)',
                                                    color: 'var(--text-gray-to-white3)',
                                                    cursor: 'default',
                                                });
                                            }
                                        }}
                                    />
                                    <span className={cx('checkbox-fake')}>
                                        <Icons.CheckBox />
                                    </span>
                                </label>
                                <p className={cx('rule-item_title', 'rule-item_title--all')}>
                                    Tôi đồng ý với Điều khoản và Dịch vụ và Chính sánh Quyền Riêng tư của TikTok và cho
                                    phép các thông báo về nội dung thịnh hành và quảng cáo.
                                </p>
                            </div>
                        </div>
                        <div className={cx('rule-item')}>
                            <div className={cx('rule-item_wrap')}>
                                <label htmlFor="checkbox-2" className={cx('rule-item_input')}>
                                    <input type="checkbox" id="checkbox-2" onChange={handleInput} />
                                    <span className={cx('checkbox-fake')}>
                                        <Icons.CheckBox />
                                    </span>
                                </label>
                                <p className={cx('rule-item_title')}>Điều khoản sử dụng TikTok</p>
                            </div>
                            <div className={cx('rule-item_detail')}>
                                <Rules rule={1} />
                            </div>
                        </div>
                        <div className={cx('rule-item')}>
                            <div className={cx('rule-item_wrap')}>
                                <label htmlFor="checkbox-3" className={cx('rule-item_input')}>
                                    <input type="checkbox" id="checkbox-3" onChange={handleInput} />
                                    <span className={cx('checkbox-fake')}>
                                        <Icons.CheckBox />
                                    </span>
                                </label>
                                <p className={cx('rule-item_title')}>Chính sách Quyền riêng tư của TikTok</p>
                            </div>
                            <div className={cx('rule-item_detail')}>
                                <Rules rule={2} />
                            </div>
                        </div>
                        <div className={cx('rule-item')}>
                            <div className={cx('rule-item_wrap')}>
                                <label htmlFor="checkbox-4" className={cx('rule-item_input')}>
                                    <input type="checkbox" id="checkbox-4" onChange={handleInput} />
                                    <span className={cx('checkbox-fake')}>
                                        <Icons.CheckBox />
                                    </span>
                                </label>
                                <p className={cx('rule-item_title')}>
                                    Các thông báo về nội dung thịnh hành và quảng cáo (Tùy chọn)
                                </p>
                            </div>
                            <div className={cx('rule-item_detail')}>
                                <Rules rule={3} />
                            </div>
                        </div>
                    </div>
                    <button
                        className={cx('next-btn', { rule_btn: true })}
                        onClick={() => {
                            const inputList = document.querySelectorAll('input[type="checkbox"]');
                            const result = Array.from(inputList).every((item) => item.checked === true);
                            if (result) {
                                typeofForm('registerForm');
                                setFormValue(true);
                            }
                        }}
                    >
                        Tiếp
                    </button>
                </>
            );

        case 'registerForm':
            return (
                <>
                    <h1 className={cx('login-title')}>Đăng ký</h1>
                    <div className={cx('birthday-wrap')}>
                        <h3 className={cx('birthday-title')}>Ngày sinh của bạn là ngày nào?</h3>
                        <div className={cx('birthday-selector')}>
                            <BirtofDay
                                birthday={birthday}
                                setBirthday={setBirthday}
                                data={months}
                                keyValue={'month'}
                                keyVN={'Tháng'}
                            />
                            <BirtofDay
                                birthday={birthday}
                                setBirthday={setBirthday}
                                data={days}
                                keyValue={'day'}
                                keyVN={'Ngày'}
                            />
                            <BirtofDay
                                birthday={birthday}
                                setBirthday={setBirthday}
                                data={years}
                                keyValue={'year'}
                                keyVN={'Năm'}
                            />
                        </div>
                        <p className={cx('descriptions')}>Ngày sinh của bạn sẽ không được hiển thị công khai.</p>
                    </div>
                    <div className={cx('register-wrap')}>
                        <div className={cx('register-methods')}>
                            Email
                            <p>Đăng ký bằng số điện thoại</p>
                        </div>
                        {registerState ? <div className={cx('register-fail')}>Tài khoản đã được đăng ký !</div> : ''}
                        <EmailandPass emailAndPass={emailAndPass} setEmailAndPass={setEmailAndPass} />
                    </div>
                    <div className={cx('connect-email')}>
                        <div className={cx('connect-checkbox')}>
                            <input id={'connect-email_checkbox'} type="checkbox" />
                            <label htmlFor="connect-email_checkbox" className={cx('checkbox-fake')}>
                                <span>
                                    <Icons.CheckBox />
                                </span>
                            </label>
                        </div>
                        <p className={cx('description')}>
                            Nhận nội dung thịnh hành, bản tin, khuyến mại, đề xuất và thông tin cập nhật tài khoản được
                            gửi đến email của bạn
                        </p>
                    </div>
                    <button className={cx('next-btn', { submit_account: formState })} onClick={handleSubmitAcc}>
                        Tiếp
                    </button>
                </>
            );
        case 'loginForm':
            return (
                <>
                    <h1 className={cx('login-title')}>Đăng nhập</h1>

                    <div className={cx('register-wrap')}>
                        <div className={cx('register-methods')}>
                            Email hoặc TikTok ID
                            <p>Đăng nhập bằng số điện thoại</p>
                        </div>

                        <EmailandPass
                            emailAndPass={emailAndPass}
                            setEmailAndPass={setEmailAndPass}
                            loginForm
                            err={err}
                            setErr={setErr}
                        />
                    </div>

                    <button className={cx('next-btn', { submit_account: formState })} onClick={handleLogin}>
                        Đăng nhập
                    </button>
                </>
            );
        case 'setID':
            return (
                <>
                    <h1 className={cx('login-title')}>Đăng ký</h1>
                    <div className={cx('tiktok-id_create-title')}>Tạo TikTok ID</div>
                    <input
                        className={cx('tiktok-id_input')}
                        placeholder={'TikTok ID'}
                        onChange={(e) => {
                            const value = e.target.value;
                            setTiktokID(value);
                        }}
                    />
                    <p className={cx('tiktok-id_descriptions')}>Bạn luôn có thể thay đổi điều này sau.</p>
                    <button
                        className={cx('tiktok-id_create-btn', { active: tiktokID.length > 0 ? true : false })}
                        onClick={handleSubmitTiktokID}
                    >
                        Đăng ký
                    </button>
                    <div className={cx('tiktok-id_create-skip')}>
                        <button
                            onClick={() => {
                                setLoginPopper(false);

                                setTypeofForm('login');
                            }}
                        >
                            Bỏ qua
                        </button>
                    </div>
                </>
            );

        default:
            console.log('error');
    }
}
export default Container;
