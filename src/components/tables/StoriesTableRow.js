import { object } from 'prop-types';

const StoriesTableRow = ({ story }) => (
  <tr class="news-table-row" key={story.objectID}>
    <td>
      <a 
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {story.title}
      </a>
    </td>
    <td>{story.author}</td>
    <td className="text-center">{story.num_comments}</td>
    <td className="text-center">{story.points}</td>
  </tr>
);

StoriesTableRow.propTypes = {
  story: object.isRequired,
};

export default StoriesTableRow;
