import { Link } from 'react-router-dom';

function LinkElement({ to, href, content }) {
    let LinkElement = 'a';
    if (to) LinkElement = Link;
    return (
        <LinkElement to={to} href={href}>
            {content}
        </LinkElement>
    );
}
export default LinkElement;
