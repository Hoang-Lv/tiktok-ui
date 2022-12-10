import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWapper } from '~/components/Popper';
import RenderSearchResult from './RenderSearchResult';
import Icons from '~/components/asset/Icons';
import style from './HeaderSearch.module.scss';
import { useDebounce } from '~/hooks';
import { search } from '~/services';

var cx = classNames.bind(style);
function HeaderSearch() {
    const [searchResult, setSearchResult] = useState([]);
    const [inputValues, setInputValues] = useState('');
    const [showResults, setShowResults] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const valueDebounce = useDebounce(inputValues, 800);
    const ref = useRef();
    const handleClear = () => {
        setInputValues('');
        ref.current.focus();
        setSearchResult([]);
    };
    const handleUserClick = () => {
        setSearchResult([]);
        setInputValues('');
    };
    const handleValueInput = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) setInputValues(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const InputIcons = (e) => {
        if (inputValues !== '') {
            if (showLoading)
                return (
                    <div className={cx('loading_icon')}>
                        <Icons.Spinner />
                    </div>
                );
            else
                return (
                    <div className={cx('clear_icon')} onClick={handleClear}>
                        <Icons.Clear />
                    </div>
                );
        }
    };
    useEffect(() => {
        if (!valueDebounce.trim()) return;
        async function fetchApi() {
            setShowLoading(true);
            const res = await search(valueDebounce);
            setSearchResult(res);
            setShowLoading(false);
        }
        fetchApi();
    }, [valueDebounce]);

    return (
        <HeadLessTippy
            appendTo={'parent'}
            visible={searchResult.length > 0 && showResults}
            interactive={true}
            render={(attrs) => (
                <PopperWapper tabIndex="-1" {...attrs}>
                    <div className={cx('popper_wrapper')}>
                        <span className={cx('popper_wrapper__account')}>Tài khoản</span>
                        <RenderSearchResult onClick={handleUserClick} data={searchResult} />
                    </div>
                </PopperWapper>
            )}
            onClickOutside={() => {
                setShowResults(false);
            }}
        >
            <div className={cx('header_search')}>
                <input
                    ref={ref}
                    placeholder="Tìm kiếm tài khoản và video"
                    value={inputValues}
                    onChange={handleValueInput}
                    onFocus={() => setShowResults(true)}
                />
                <InputIcons />
                <button className={cx('search_btn')} onMouseDown={handleSubmit}>
                    <Icons.Search />
                </button>
            </div>
        </HeadLessTippy>
    );
}
export default HeaderSearch;
