const Search = ({ query, placeholder, handleQueryChange }) => (
  <form className="form search-form">
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        name="query"
        id="query"
        value={query}
        onInput={handleQueryChange}
        placeholder={placeholder}
      />
    </div>
  </form>
);

Search.defaultProps = {
  placeholder: 'Search'
};

export default Search;
