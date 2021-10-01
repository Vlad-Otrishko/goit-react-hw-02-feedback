import React from 'react';
import s from './SectionTitle.module.css';
import PropTypes from 'prop-types';


const SectionTitle = ({ title, children}) => {
  return (
    <section className={s.wrapper}>
      <h2 className = {s.title}> {title}</h2>
      { children}
    </section>
  );
};
export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
