import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import NotificationMessage from './NotificationMessage/NotificationMessage';
import Section from './Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const option = Object.keys({ good, neutral, bad });

  const handleFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions options={option} onLeaveFeedback={handleFeedback} />
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positiveFeedback={countPositiveFeedbackPercentage()}
            totalFeedback={countTotalFeedback()}
          />
        </Section>
      ) : (
        <NotificationMessage />
      )}
    </div>
  );
};

export default App;
//s
