import { object, func } from 'prop-types';
import Button from '../shared/Button';

const StoriesTableRow = ({ story, onStoryDismiss }) => (
  <tr class="news-table-row" key={story.objectID}>
    <td className="p-3">
      <a href={story.url}>{story.title}</a>
    </td>
    <td className="p-3">{story.author}</td>
    <td className="p-3">{story.num_comments}</td>
    <td className="p-3">{story.points}</td>
    <td className="p-3">
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
