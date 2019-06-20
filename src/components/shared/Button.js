const Button = ({ children, ...restProps }) => (
  <button {...restProps}>{children}</button>
);

Button.defaultProps = {
  type: 'button'
};

export default Button;
