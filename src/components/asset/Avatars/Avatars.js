import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './avatar.module.scss';
import images from '../defaultImage';
const cx = classNames.bind(styles);

function Avatars({ src, alt, classNames, ...props }) {
    const [image, setImage] = useState('');
    const [newSrc, setNewSrc] = useState(src);

    const handleError = () => {
        setImage(images.defaultImage);
    };
    useEffect(() => {
        setNewSrc(src);
        setImage(null);
    }, [src]);
    return (
        <img
            className={cx(classNames, 'avatarWrap')}
            src={image || newSrc}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}
Avatars.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    classNames: PropTypes.string,
};
export default Avatars;
