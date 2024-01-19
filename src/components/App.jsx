import { FeedbackOptions } from 'components/FeedbackOption/FeedbackOption';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';

import { useState } from 'react';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onAddFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((feedback.good * 100) / total);
  };

  const { good, neutral, bad } = feedback;
  const options = Object.keys(feedback);
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage() || 0;

  return (
    <>
      <Section title="Please, leave feedback!">
        <FeedbackOptions options={options} onHandleFeedback={onAddFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          goodCounter={good}
          neutralCounter={neutral}
          badCounter={bad}
          total={total}
          positivePercentage={positivePercentage}
        ></Statistics>
      </Section>
    </>
  );
};
