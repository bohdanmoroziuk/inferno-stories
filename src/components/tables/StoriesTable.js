import { arrayOf, object, func } from 'prop-types';
import StoriesTableRow from './StoriesTableRow';
import Icon from '../shared/Icon';

const StoriesTable = ({ stories }) => {
  const renderTableHead = () => (
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th className="text-center">
          <Icon type="far" name="comments" />
        </th>
        <th className="text-center">
          <Icon type="far" name="thumbs-up" />
        </th>
      </tr>
    </thead>
  );

  const renderTableBody = () => (
    <tbody>{stories && stories.map(renderStory)}</tbody>
  );

  const renderStory = story => (
    <StoriesTableRow key={story.objectID} story={story} />
  );

  return (
    <div className="table-responsive">
      <table className="table table-hover news-table">
        {renderTableHead()}
        {renderTableBody()}
      </table>
    </div>
  );
};

StoriesTable.propTypes = {
  stories: arrayOf(object).isRequired,
  onDismiss: func.isRequired
};

export default StoriesTable;
