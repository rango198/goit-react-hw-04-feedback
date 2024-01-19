import { FeedbackOptions } from 'components/FeedbackOption/FeedbackOption';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onAddFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage() || 0;

    return (
      <>
        <Section title="Please, leave feedback!">
          <FeedbackOptions
            options={options}
            onHandleFeedback={this.onAddFeedback}
          />
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
  }
}
