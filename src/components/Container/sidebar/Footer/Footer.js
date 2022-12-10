import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import LinkElement from './LinkElement';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer-wrap')}>
            <div className={cx('link-wrap')}>
                <LinkElement href={'/'} content={'Giới thiệu'} />
                <LinkElement href={'/'} content={'TikTok Browse'} />
                <LinkElement href={'/'} content={'Bảng tin'} />
                <LinkElement href={'/'} content={'Liên hệ'} />
                <LinkElement href={'/'} content={'Sự nghiệp'} />
                <LinkElement href={'/'} content={'ByteDance'} />
            </div>
            <div className={cx('link-wrap')}>
                <LinkElement href={'/'} content={'TikTok for Good'} />
                <LinkElement href={'/'} content={'Quảng cáo'} />
                <LinkElement href={'/'} content={'Developers'} />
                <LinkElement href={'/'} content={'Transparency'} />
                <LinkElement href={'/'} content={'TikTok Rewards'} />
            </div>
            <div className={cx('link-wrap')}>
                <LinkElement href={'/'} content={'Trợ giúp'} />
                <LinkElement href={'/'} content={'An toàn'} />
                <LinkElement href={'/'} content={'Điều khoản'} />
                <LinkElement href={'/'} content={'Quyền riêng tư'} />
                <LinkElement href={'/'} content={'Create Portal'} />
                <LinkElement href={'/'} content={'Hướng dẫn Cộng đồng'} />
            </div>
            <div className={cx('more-link')}>Thêm</div>
            <span>© 2022 TikTok</span>
        </div>
    );
}
export default Footer;
