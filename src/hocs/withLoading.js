import { Component } from 'inferno';
import Loader from '../components/shared/Loader';

const withLoading = WrappedComponent =>  
  class WithLoading extends Component {
    render() {
      const { isLoading, ...restProps } = this.props;

      return isLoading 
        ? <Loader /> 
        : <WrappedComponent {...restProps} />;
    }
  }

export default withLoading;
