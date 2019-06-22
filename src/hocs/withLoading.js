import Loader from '../components/shared/Loader';

const withLoading = Component => ({ isLoading, ...restProps }) =>
  isLoading ? <Loader /> : <Component {...restProps} />;

export default withLoading;
