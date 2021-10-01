import React from 'react';
import s from './Button.module.css';
import PropTypes from "prop-types";

const Button = ({ name, className, onLeaveFeedback}) => {
  return (
    <button type="button" className={className } onClick={onLeaveFeedback}>
      {name}
    </button>
  );
};
export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};

