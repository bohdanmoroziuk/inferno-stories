import { object } from 'prop-types';

const StoriesTableRow = ({ story }) => (
  <tr class="stories-table__row" key={story.objectID}>
    <td className="stories-table__cell" data-label="Title">
      <a 
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {story.title}
      </a>
    </td>
    <td 
      className="stories-table__cell" 
      data-label="Author"
    >
      {story.author}
    </td>
    <td 
      className="stories-table__cell" 
      data-label="Comments"
    >
      {story.num_comments}
    </td>
    <td 
      className="stories-table__cell" 
      data-label="Points"
    >
      {story.points}
    </td>
  </tr>
);

StoriesTableRow.propTypes = {
  story: object.isRequired,
};

export default StoriesTableRow;
