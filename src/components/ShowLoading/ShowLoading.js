import classNames from 'classnames/bind';
import styles from './ShowLoading.module.scss';
const cx = classNames.bind(styles);
function ShowLoading() {
    return (
        <div className={cx('loading-animation')}>
            <div className={cx('new-green')}></div>
            <div className={cx('new-red')}></div>
            {/* <div className={cx('green')}></div>
            <div className={cx('red')}></div>
            <div className={cx('green')}></div> */}
        </div>
    );
}
export default ShowLoading;
