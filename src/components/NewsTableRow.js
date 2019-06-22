import Button from './shared/Button';

const NewsTableRow = ({ news, hideNews }) => (
  <tr class="news-table-row" key={news.objectID}>
    <td className="p-3">
      <a href={news.url}>{news.title}</a>
    </td>
    <td className="p-3">{news.author}</td>
    <td className="p-3">{news.num_comments}</td>
    <td className="p-3">{news.points}</td>
    <td className="p-3">
      <Button className="btn btn-danger btn-sm" onClick={hideNews}>
        Hide
      </Button>
    </td>
  </tr>
);

export default NewsTableRow;
