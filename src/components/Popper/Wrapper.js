import classNames from 'classnames/bind';
import style from './Popper.module.scss';
const cx = classNames.bind(style);
function Wrapper({ children, tabIndex }) {
    return (
        <div className={cx('proper-wrapper')} tabIndex={tabIndex}>
            {children}
        </div>
    );
}
export default Wrapper;
