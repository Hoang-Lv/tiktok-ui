import './GlobalStyle.scss';
import { Consumer } from '../../Context';
function GlobalStyles({ children }) {
    const theme = localStorage.getItem('theme');
    const [darkmode] = Consumer().darkmode;
    if (darkmode || theme === 'dark') {
        document.querySelector('html').setAttribute('data-theme', 'dark-mode');
    }
    if (!darkmode || theme === 'light') {
        document.querySelector('html').setAttribute('data-theme', 'light-mode');
    }
    return children;
}
export default GlobalStyles;
