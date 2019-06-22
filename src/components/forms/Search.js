import { string, func } from 'prop-types';
import Button from '../shared/Button';

const Search = ({ value, onChange, onSubmit, placeholder }) => (
  <form className="form search-form" {...{ onSubmit }}>
    <div className="d-flex align-items-center justify-content-between">
      <div className="form-group w-100 mb-0">
        <input
          className="form-control"
          type="text"
          name="query"
          id="query"
          value={value}
          onInput={onChange}
          placeholder={placeholder}
        />
      </div>
      <Button className="btn btn-primary btn-sm ml-2" type="submit">
        Search
      </Button>
    </div>
  </form>
);

Search.defaultProps = {
  placeholder: 'Search'
};

Search.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  onSubmit: func.isRequired,
  placeholder: string
};

export default Search;
