import { useState } from 'react';
import 'tippy.js/dist/tippy.css';
import { Consumer } from '~/Context';

import Icons from '../asset/Icons';
import Container from './Container';
import styles from './Modal.module.scss';
import className from 'classnames/bind';
const cx = className.bind(styles);

function Modal() {
    const login = Consumer();
    const [loginPopper, setLoginPopper] = login.loginPopper;

    const [typeofForm, setTypeofForm] = useState('login');

    const [formValue, setFormValue] = useState(true);

    const handleClose = () => {
        setLoginPopper(false);

        setTypeofForm('login');
    };
    const handleBack = () => {
        switch (typeofForm) {
            case 'rules':
                setTypeofForm('register');
                break;
            case 'registerForm':
                setTypeofForm('rules');
                setFormValue(false);
                break;
            case 'loginForm':
                setTypeofForm('login');
                break;
            default:
                console.log('error');
        }
    };
    if (!loginPopper) {
        return;
    } else {
        return (
            <div className={cx('login-wrap')}>
                <div className={cx('login-overlay')}></div>
                <div className={cx('login-content')}>
                    <div className={cx('login-header')}>
                        <div className={cx('header-wrap', { header_wrap: true })}>
                            <Container
                                type={typeofForm}
                                typeofForm={setTypeofForm}
                                formValue={formValue}
                                setFormValue={setFormValue}
                                setLoginPopper={setLoginPopper}
                                setTypeofForm={setTypeofForm}
                            />
                        </div>
                    </div>

                    {typeofForm !== 'login' ? (
                        <div className={cx('register-rules', { register_rules: true })}>
                            <p>
                                B???ng c??ch ti???p t???c, b???n ?????ng ?? v???i
                                <a> ??i???u kho???n S??? d???ng </a>
                                c???a TikTok v?? x??c nh???n r???ng b???n ???? ?????c hi???u
                                <a> Ch??nh s??ch Quy???n ri??ng t?? </a>
                                c???a TikTok.
                            </p>
                        </div>
                    ) : (
                        ''
                    )}
                    <div className={cx('login-footer')}>
                        B???n{typeofForm === 'login' || typeofForm === 'loginForm' ? ' kh??ng c?? ' : ' ???? c?? '} t??i kho???n?
                        <span
                            onClick={() => {
                                setTypeofForm(
                                    typeofForm === 'login' || typeofForm === 'loginForm' ? 'register' : 'login',
                                );
                            }}
                        >
                            {typeofForm === 'login' || typeofForm === 'loginForm' ? ' ????ng k??' : ' ????ng nh???p'}
                        </span>
                    </div>
                    <span className={cx('close-btn')} onClick={handleClose}>
                        <Icons.Clear />
                    </span>
                    {typeofForm === 'login' || typeofForm === 'register' || typeofForm === 'setID' ? (
                        ''
                    ) : (
                        <span className={cx('back-btn')} onClick={handleBack}>
                            <Icons.Back />
                        </span>
                    )}
                </div>
            </div>
        );
    }
}
export default Modal;
