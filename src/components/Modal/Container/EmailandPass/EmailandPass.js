import { useState, useEffect, memo } from 'react';

import Icons from '~/components/asset/Icons';

import classNames from 'classnames/bind';
import styles from './EmailandPass.module.scss';
const cx = classNames.bind(styles);
function EmailandPass({ emailAndPass, setEmailAndPass, loginForm, err, setErr }) {
    const [showPasswords, setShowPasswords] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [rePasswordError, setRePasswordError] = useState(false);
    const [rePassword, setRePassword] = useState('');
    if (loginForm) {
        return (
            <>
                <div className={cx('email')}>
                    <input
                        autoFocus={true}
                        id={'account-name'}
                        placeholder={'Địa chỉ email hoặc TikTok ID'}
                        onChange={(e) => {
                            const value = e.target.value;
                            setEmailAndPass((prev) => ({ ...prev, email: value }));
                        }}
                    />
                </div>
                <div className={cx('email')}>
                    <input
                        id={'password'}
                        placeholder={'Mật khẩu'}
                        type={showPasswords ? 'text' : 'password'}
                        style={{
                            border: err ? '1px solid var(--primary-color)' : '',
                        }}
                        onChange={(e) => {
                            const value = e.target.value;
                            setEmailAndPass((prev) => ({ ...prev, password: value }));
                            setErr(false);
                        }}
                    />
                    {err ? (
                        <span style={{ marginRight: 30 }} className={cx('error-icon')}>
                            <Icons.Warning />
                        </span>
                    ) : (
                        ''
                    )}

                    <span className={cx('password-icon')} onClick={() => setShowPasswords(!showPasswords)}>
                        {showPasswords ? <Icons.EyeOpen /> : <Icons.EyeClose />}
                    </span>
                </div>
                {err ? <div className={cx('password-warning')}>Mật khẩu sai</div> : ''}
            </>
        );
    } else {
        return (
            <>
                <div className={cx('email')}>
                    <input
                        id={'account-name'}
                        placeholder={'Địa chỉ email'}
                        style={{
                            border: emailError ? '1px solid var(--primary-color)' : '',
                        }}
                        onChange={(e) => {
                            const value = e.target.value;
                            const atPosition = value.indexOf('@');
                            const spacePosition = value.indexOf(' ');
                            const dotPosition = value.lastIndexOf('.');
                            if (
                                atPosition < 0 ||
                                spacePosition > 0 ||
                                dotPosition < atPosition + 3 ||
                                value.length <= dotPosition + 2
                            ) {
                                setEmailAndPass((prev) => ({ ...prev, email: '' }));
                            } else {
                                setEmailError(false);
                                setEmailAndPass((prev) => ({ ...prev, email: value }));
                            }
                        }}
                        onBlur={(e) => {
                            const value = e.target.value;
                            const atPosition = value.indexOf('@');
                            const spacePosition = value.indexOf(' ');
                            const dotPosition = value.lastIndexOf('.');
                            if (
                                atPosition < 0 ||
                                spacePosition > 0 ||
                                dotPosition < atPosition + 3 ||
                                value.length <= dotPosition + 2
                            ) {
                                setEmailError(true);
                            } else {
                                setEmailError(false);
                            }
                        }}
                    />
                    {emailError ? (
                        <span className={cx('error-icon')}>
                            <Icons.Warning />
                        </span>
                    ) : (
                        ''
                    )}
                </div>
                {emailError ? <span className={cx('error-mesage')}>Nhập địa chỉ email hợp lệ</span> : ''}
                <div className={cx('email')}>
                    <input
                        id={'password'}
                        placeholder={'Mật khẩu'}
                        type={showPasswords ? 'text' : 'password'}
                        style={{
                            border: passwordError ? '1px solid var(--primary-color)' : '',
                        }}
                        onFocus={(e) => setShowWarning(true)}
                        onBlur={(e) => {
                            const value = e.target.value;
                            const ignoreNumber = /\d/im;
                            const ignoreCharacter = /\W/gim;
                            const numberPosition = value.search(ignoreNumber);
                            const characterPosition = value.search(ignoreCharacter);
                            const titleWarnings = document.querySelectorAll('.warning_title');
                            const iconWarnings = document.querySelectorAll('.warning_icon');
                            if (value.length < 6 || (numberPosition < 0 && characterPosition < 0)) {
                                const titleWarnings = document.querySelectorAll('.warning_title');
                                const iconWarnings = document.querySelectorAll('.warning_icon');
                                if (value.length < 6) {
                                    titleWarnings[0].style.color = 'var(--primary-color)';
                                    iconWarnings[0].style.color = 'var(--primary-color)';
                                }
                                if (numberPosition < 0 || characterPosition < 0) {
                                    titleWarnings[1].style.color = 'var(--primary-color)';
                                    iconWarnings[1].style.color = 'var(--primary-color)';
                                }
                                setPasswordError(true);
                            } else {
                                setPasswordError(false);
                                setShowWarning(false);
                            }
                        }}
                        onChange={(e) => {
                            const value = e.target.value;
                            const ignoreNumber = /\d/im;
                            const ignoreCharacter = /\W/gim;
                            const ignoreString = /[a-zA-Z]/;
                            const numberPosition = value.search(ignoreNumber);
                            const characterPosition = value.search(ignoreCharacter);
                            const stringPosition = value.search(ignoreString);
                            const titleWarnings = document.querySelectorAll('.warning_title');
                            const iconWarnings = document.querySelectorAll('.warning_icon');
                            if (value.length >= 6) {
                                titleWarnings[0].style.color = 'rgb(11, 224, 155)';
                                iconWarnings[0].style.color = 'rgb(11, 224, 155)';
                            } else {
                                titleWarnings[0].style.color = '';
                                iconWarnings[0].style.color = '';
                            }
                            if (numberPosition >= 0 && characterPosition >= 0 && stringPosition >= 0) {
                                setRePassword(value);
                                titleWarnings[1].style.color = 'rgb(11, 224, 155)';
                                iconWarnings[1].style.color = 'rgb(11, 224, 155)';
                            } else {
                                titleWarnings[1].style.color = '';
                                iconWarnings[1].style.color = '';
                                setRePassword('');
                            }
                            if (value !== emailAndPass.password) setEmailAndPass((prev) => ({ ...prev, password: '' }));
                        }}
                    />
                    {passwordError ? (
                        <span style={{ marginRight: 30 }} className={cx('error-icon')}>
                            <Icons.Warning />
                        </span>
                    ) : (
                        ''
                    )}

                    <span className={cx('password-icon')} onClick={() => setShowPasswords(!showPasswords)}>
                        {showPasswords ? <Icons.EyeOpen /> : <Icons.EyeClose />}
                    </span>
                </div>
                {showWarning ? (
                    <div className={cx('password-warning')}>
                        <div className={cx('warning-header')}>Mật khẩu của bạn phải gồm:</div>
                        <div className={cx('warning-item', { warning_item: true })}>
                            <span className={cx('warning-icon', { warning_icon: true })}>
                                <Icons.CheckBox />
                            </span>
                            <p className={cx('warning-title', { warning_title: true })}>8 đến 20 ký tự</p>
                        </div>
                        <div className={cx('warning-item')}>
                            <span className={cx('warning-icon', { warning_icon: true })}>
                                <Icons.CheckBox />
                            </span>
                            <p className={cx('warning-title', { warning_title: true })}>
                                Các chữ cái, số và ký tự đặc biệt
                            </p>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {rePassword.length <= 0 ? null : (
                    <div className={cx('email')}>
                        <input
                            id={'re-password'}
                            placeholder={'Nhập lại mật khẩu'}
                            type={showPasswords ? 'text' : 'password'}
                            style={{
                                border: rePasswordError ? '1px solid var(--primary-color)' : '',
                            }}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value === rePassword) {
                                    setEmailAndPass((prev) => ({ ...prev, password: value }));
                                    setRePasswordError(false);
                                } else {
                                    setEmailAndPass((prev) => ({ ...prev, password: '' }));
                                }
                            }}
                            onBlur={(e) => {
                                const value = e.target.value;
                                if (value !== rePassword) setRePasswordError(true);
                                else {
                                    setRePasswordError(false);
                                }
                            }}
                        />
                        {rePasswordError ? (
                            <span style={{ marginRight: 30 }} className={cx('error-icon')}>
                                <Icons.Warning />
                            </span>
                        ) : (
                            ''
                        )}
                        {rePasswordError ? <span className={cx('error-mesage')}>Vui lòng nhập lại mật khẩu</span> : ''}
                    </div>
                )}
            </>
        );
    }
}
export default memo(EmailandPass);
