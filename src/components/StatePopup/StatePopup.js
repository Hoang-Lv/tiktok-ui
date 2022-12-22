import classNames from 'classnames/bind';
import style from './StatePopup.module.scss';
const cx = classNames.bind(style);

function StatePopup({ content, size }) {
    return (
        <div className={cx('popup-wrap')}>
            <p style={{ width: size ? size : '' }}>{content}</p>
        </div>
    );
}
export default StatePopup;
