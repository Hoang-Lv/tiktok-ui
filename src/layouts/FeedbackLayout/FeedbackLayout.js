import Header from '../../components/Header';
import Container from '~/components/Container';
function FeedbackLayout({ children }) {
    return (
        <>
            <Header />
            <Container>{children}</Container>
        </>
    );
}
export default FeedbackLayout;
