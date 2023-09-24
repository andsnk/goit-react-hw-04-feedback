import React from 'react';
import css from './Statistics.module.css';
const Statistics = ({
  good,
  neutral,
  bad,
  positiveFeedback,
  totalFeedback,
}) => {
  return (
    <ul className={css.list}>
      <li>
        <span>Good:</span>
        <span>{good}</span>
      </li>
      <li>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>Bad:</span>
        <span>{bad}</span>
      </li>
      <li>
        <span>Total:</span>
        <span>{totalFeedback}</span>
      </li>
      <li>
        <span>Positive feedback:</span>
        <span>{positiveFeedback}% </span>
      </li>
    </ul>
  );
};

export default Statistics;
