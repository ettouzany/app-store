const Search = ({ onChange, value }) => {
    return (
        <div className="search">
        <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={onChange}
        />
        </div>
    );
    }
    export default Search;
    