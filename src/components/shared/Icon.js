import { string, oneOf } from 'prop-types';

const Icon = ({ variant = 'fas', icon }) => (
  <i className={`${variant} fa-${icon}`} />
);

Icon.propTypes = {
  variant: oneOf(['fas', 'far', 'fal', 'fab']),
  icon: string.isRequired
};

export default Icon;
