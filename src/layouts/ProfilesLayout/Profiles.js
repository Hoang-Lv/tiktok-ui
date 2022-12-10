import Header from '~/components/Header';
import Sidebar from '~/components/Container/sidebar';
import Container from '~/components/Container';
function ProfilesLayout({ children }) {
    return (
        <>
            <Header fullWidth />
            <Container fullWidth>
                <Sidebar smallWidth />
                {children}
            </Container>
        </>
    );
}
export default ProfilesLayout;
