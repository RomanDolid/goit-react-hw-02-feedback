import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>
        <span>Total: </span>
        {total}
      </p>
      <p>
        <span>Positive feedback: </span>
        {positivePercentage}%
      </p>
    </div>
  );
};

export default Statistics;
