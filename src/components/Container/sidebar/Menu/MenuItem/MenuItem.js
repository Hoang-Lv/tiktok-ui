import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ to, title, Icon, SolidIcon, end }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })} end={end}>
            <Icon width={32} height={32} className={cx('icon')} />
            <SolidIcon width={32} height={32} className={cx('solid-icon')} />
            <h2 className={cx('title')}>{title}</h2>
        </NavLink>
    );
}
MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    Icon: PropTypes.func.isRequired,
};
export default MenuItem;
