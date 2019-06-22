import StoriesTableRow from './StoriesTableRow';

const StoriesTable = ({ stories, onDismiss }) => {
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
    <table className="table news-table">
      <tbody>{stories && stories.map(renderStory)}</tbody>
    </table>
  );
};

export default StoriesTable;
