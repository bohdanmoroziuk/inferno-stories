import withLoading from '../../hocs/withLoading';
import Loader from '../shared/Loader';
import StoriesTable from './StoriesTable';

const LoadingStoriesTable = withLoading(StoriesTable, Loader);

export default LoadingStoriesTable;
