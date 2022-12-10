import styles from './Container.module.scss';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classnames.bind(styles);

function Container({ children, fullWidth }) {
    return (
        <div className={cx('container')} style={{ width: fullWidth ? '100%' : '' }}>
            {children}
        </div>
    );
}

export default Container;
