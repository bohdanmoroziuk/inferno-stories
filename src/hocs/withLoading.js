import { Component } from 'inferno';

const withLoading = (WrappedComponent, Loader) =>  
  class WithLoading extends Component {
    render() {
      const { isLoading, ...restProps } = this.props;

      return isLoading 
        ? <Loader /> 
        : <WrappedComponent {...restProps} />;
    }
  }

export default withLoading;
