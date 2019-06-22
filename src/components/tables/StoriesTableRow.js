import { object, func } from 'prop-types';
import Button from '../shared/Button';

const StoriesTableRow = ({ story, onStoryDismiss }) => (
  <tr class="news-table-row" key={story.objectID}>
    <td>
      <a href={story.url}>{story.title}</a>
    </td>
    <td>{story.author}</td>
    <td className="text-center">{story.num_comments}</td>
    <td className="text-center">{story.points}</td>
    <td>
      <Button className="btn btn-danger btn-sm" onClick={onStoryDismiss}>
        Hide
      </Button>
    </td>
  </tr>
);

StoriesTableRow.propTypes = {
  story: object.isRequired,
  onStoryDismiss: func.isRequired
};

export default StoriesTableRow;
