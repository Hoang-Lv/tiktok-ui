import classname from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classname.bind(styles);

function Home() {
    return (
        <div className={cx('home-content')}>
            <h1>live demo</h1>
        </div>
    );
}
export default Home;
