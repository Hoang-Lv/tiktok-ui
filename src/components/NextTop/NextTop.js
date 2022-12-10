import Icons from '../asset/Icons';
import classnames from 'classnames/bind';
import styles from './NextTop.module.scss';
const cx = classnames.bind(styles);
function NextTop({ onClick, nextTop }) {
    return (
        <button className={cx('nexttop-btn')} onClick={onClick} style={{ bottom: nextTop ? 20 : '' }}>
            <Icons.Next />
        </button>
    );
}
export default NextTop;
