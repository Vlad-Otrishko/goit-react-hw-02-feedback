import React from 'react';
import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <h2 className={s.message}>{ message}</h2>)
}
export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
