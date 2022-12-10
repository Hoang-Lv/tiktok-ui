import AccountItem from '../../AccountItem';
function RenderSearchResult({ data, onClick }) {
    const searchResult = data.map((results) => (
        <AccountItem key={results.id} onClick={onClick} data={results} size="big" />
    ));
    return searchResult;
}
export default RenderSearchResult;
