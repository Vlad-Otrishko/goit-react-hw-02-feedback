import React from 'react';
import s from './Statistics.module.css';
import PropTypes from "prop-types";
const Statistics = ({ good, neutral, bad, total, positivePercentage })=>{
    return (
      <>
          <ul className={s.records}>
            <li className={s[`records__item`]}> Good={good}</li>
            <li className={s[`records__item`]}>Neutral={neutral}</li>
            <li className={s[`records__item`]}>Bad={bad}</li>
            <li className={s[`records__item--final`]}>Total={total}</li>
            <li className={`${s[`records__item--final`]} ${s[`records__item--positive`]}`}>
              Positive Percentage={positivePercentage} %
            </li>
          </ul>
      </>
    );
}
export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}
