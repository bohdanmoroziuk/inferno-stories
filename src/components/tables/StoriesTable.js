import { arrayOf, object, func } from 'prop-types';
import StoriesTableRow from './StoriesTableRow';
import Icon from '../shared/Icon';

const StoriesTable = ({ stories, onDismiss }) => {
  const renderTableHead = () => (
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th className="text-center">
          <Icon variant="far" icon="comments" />
        </th>
        <th className="text-center">
          <Icon variant="far" icon="thumbs-up" />
        </th>
        <th />
      </tr>
    </thead>
  );

  const renderTableBody = () => (
    <tbody>{stories && stories.map(renderStory)}</tbody>
  );

  const renderStory = story => {
    const handleClick = () => onDismiss(story.objectID);

    return (
      <StoriesTableRow
        {...{
          story,
          onStoryDismiss: handleClick
        }}
      />
    );
  };

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
