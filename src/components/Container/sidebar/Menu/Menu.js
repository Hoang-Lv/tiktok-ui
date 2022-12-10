import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Icons from '~/components/asset/Icons';
import MenuItem from './MenuItem';
import config from '~/config';
const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('menu')}>
            <MenuItem to={config.routes.home} Icon={Icons.Home} SolidIcon={Icons.HomeSolid} title="Dành cho bạn" end />
            <MenuItem
                to={config.routes.following}
                Icon={Icons.Users}
                SolidIcon={Icons.UsersSolid}
                title="Đang Follow"
            />
            <MenuItem to={config.routes.live} Icon={Icons.Live} SolidIcon={Icons.LiveSolid} title="LIVE" />
        </div>
    );
}
export default Menu;
