import React from 'react';
import s from './FeedbackOptions.module.css';
import Button from '../Button/Button'
import nextId from "react-id-generator";
import PropTypes from 'prop-types';


const FeedbackOptions = ({ options, onLeaveFeedback}) => {
  return (
    <>
      {Object.keys(options).map(el => (
        <Button
          name={el}
          key={nextId()}
          className={s[`button--${el}`]}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </>
  );
};
export default FeedbackOptions;



FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback:PropTypes.func,
};
