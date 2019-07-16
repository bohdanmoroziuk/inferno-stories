import { arrayOf, object, func } from 'prop-types';
import StoriesTableRow from './StoriesTableRow';
import Icon from '../shared/Icon';

const StoriesTable = ({ stories }) => {
  const renderTableHead = () => (
    <thead className="stories-table__head">
      <tr className="stories-table__row">
        <th className="stories-table__heading">Title</th>
        <th className="stories-table__heading">Author</th>
        <th className="stories-table__heading">
          <Icon type="far" name="comments" />
        </th>
        <th className="stories-table__heading">
          <Icon type="far" name="thumbs-up" />
        </th>
      </tr>
    </thead>
  );

  const renderTableBody = () => (
    <tbody className="stories-table__body">
      {stories.map(renderStory)}
    </tbody>
  );

  const renderStory = story => (
    <StoriesTableRow key={story.objectID} story={story} />
  );

  return (
    <table className="stories-table table table-hover">
      {renderTableHead()}
      {renderTableBody()}
    </table>
  );
};

StoriesTable.propTypes = {
  stories: arrayOf(object).isRequired,
  onDismiss: func.isRequired
};

export default StoriesTable;
