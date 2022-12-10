import Header from '~/components/Header';
import Container from '~/components/Container';
function UploadLayout({ children }) {
    return (
        <>
            <Header />
            <Container>{children}</Container>
        </>
    );
}
export default UploadLayout;
