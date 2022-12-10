import Header from '~/components/Header';
import Sidebar from '~/components/Container/sidebar';
import Container from '~/components/Container';
function DefaultLayout({ children }) {
    return (
        <>
            <Header />

            <Container>
                <Sidebar />
                {children}
            </Container>
        </>
    );
}
export default DefaultLayout;
