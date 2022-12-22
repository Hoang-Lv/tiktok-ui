import { Consumer } from '~/Context';
import Icons from '~/components/asset/Icons';

import classnames from 'classnames/bind';
import style from './ShowOptionsPopper.module.scss';
const cx = classnames.bind(style);

function ShowOptionsPopper({ title, type }) {
    const context = Consumer();

    const [showKeyboadShort, setShowKeyboadShort] = context.showKeyboadShort;
    const handleShowKeyboadShort = () => setShowKeyboadShort(false);
    const Items = () => {
        if (type === 'keyboardShort') {
            console.log(type);
            return (
                <>
                    <span className={cx('close-btn')} onClick={handleShowKeyboadShort}>
                        <Icons.Clear />
                    </span>
                    <div className={cx('option-item')}>
                        <span>Quay về video trước</span>
                        <Icons.BackKeyboadShort />
                    </div>
                    <div className={cx('option-item')}>
                        <span>Đi đến phần tiếp theo</span>
                        <Icons.NextKeyboadShort />
                    </div>
                    <div className={cx('option-item')}>
                        <span>Thích video</span>
                        <Icons.LikeKeyboadShort />
                    </div>
                    <div className={cx('option-item')}>
                        <span>Tắt tiếng / bật tiếng video</span>
                        <Icons.MuteKeyboadShort />
                    </div>
                </>
            );
        }
    };

    return (
        <div id={'modal'} className={cx('modal', { active: true })}>
            <div id="modal-overlay" className={cx('modal-overlay')} onClick={handleShowKeyboadShort}></div>
            <div id="modal-container" className={cx('modal-container')}>
                <div className={cx('modal-content')}>
                    <div className={cx('modal-content_options')}>
                        <h2 className={cx('modal-content_title', 'option-item')}>{title}</h2>
                        {Items()}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShowOptionsPopper;
