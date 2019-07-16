import { string, oneOf } from 'prop-types';

const Icon = ({ type = 'fas', name }) => (
  <i className={`${type} fa-${name}`} />
);

Icon.propTypes = {
  type: oneOf(['fas', 'far', 'fal', 'fab']),
  name: string.isRequired
};

export default Icon;
