import NewsTableRow from './NewsTableRow';

const NewsTable = ({ news, hideNews }) => {
  const renderNews = news => {
    const handleClick = () => hideNews(news.objectID);

    return (
      <NewsTableRow
        {...{
          news,
          hideNews: handleClick
        }}
      />
    );
  };

  return (
    <table className="table news-table">
      <tbody>{news && news.map(renderNews)}</tbody>
    </table>
  );
};

export default NewsTable;
