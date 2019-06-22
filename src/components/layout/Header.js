import { string } from 'prop-types';

const Header = ({ title }) => (
  <header className="header">
    <h1 className="title text-center">{title}</h1>
  </header>
);

Header.propTypes = {
  title: string.isRequired
};

export default Header;
