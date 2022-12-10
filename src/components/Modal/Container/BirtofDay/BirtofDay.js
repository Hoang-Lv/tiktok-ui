import { useState, useEffect, memo } from 'react';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Icons from '~/components/asset/Icons';
import { Wrapper as PopperWapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './BirtofDay.module.scss';
const cx = classNames.bind(styles);

function BirtofDay({ data = [], setBirthday = () => {}, birthday = '', keyValue = '', keyVN = '' }) {
    const [show, setShow] = useState(false);

    return (
        <div className={cx('select-wrap')}>
            <HeadLessTippy
                appendTo={'parent'}
                visible={show}
                interactive={true}
                placement={'bottom'}
                onClickOutside={() => {
                    setShow(false);
                }}
                render={(attrs) => (
                    <PopperWapper tabIndex="-1" {...attrs}>
                        <div className={cx('popper_wrapper')}>
                            {data.map((item, i) => (
                                <div
                                    key={i}
                                    className={cx('popper-item')}
                                    onClick={() => {
                                        setShow(false);
                                        setBirthday((prev) => ({ ...prev, [keyValue]: item }));
                                    }}
                                >
                                    <span className={cx({ keyValue })}>{item}</span>
                                    {birthday[keyValue] === item ? (
                                        <span className={cx('check')}>
                                            <Icons.CheckBox />
                                        </span>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            ))}
                        </div>
                    </PopperWapper>
                )}
            >
                <div
                    className={cx('selector')}
                    style={{
                        color: birthday[keyValue] || birthday[keyValue] === 0 ? 'var(--text-color)' : '',
                    }}
                    onClick={() => setShow(true)}
                >
                    {keyVN} {birthday[keyValue] ? birthday[keyValue] : ''}
                    <span className={cx('selector-icon')} style={{ transform: show ? 'rotate(180deg)' : 'rotate(0)' }}>
                        <Icons.DownSolid />
                    </span>
                </div>
            </HeadLessTippy>
        </div>
    );
}
export default memo(BirtofDay);
