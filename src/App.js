import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Statistics from './components/Statistics';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = prop => {
    this.setState(prevState => {
      return { [prop]: prevState[prop] + 1 };
    });
  };
  countTotalFeedback = () => {
    const total = this.state;
    return Object.values(total).reduce((acc, total) => acc + total, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return good === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <div className={s.container}>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        {total !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given." />
        )}
      </div>
    );
  }
}

export default App;
