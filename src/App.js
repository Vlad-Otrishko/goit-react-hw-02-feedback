
import React from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import SectionTitle from './components/SectionTitle/SectionTitle';
import Notification from './components/Notification/Notification';
import './App.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = event => {
    this.setState(previous => {
      return {
        [event.target.textContent]: previous[event.target.textContent] + 1,
      };
    });
  };
  countTotalFeedback() {
    return this.state.good + this.state.bad + this.state.neutral;
  }
  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  }
  render() {
    return (
      <div>
        <SectionTitle title={'Please, leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
        </SectionTitle>
        <SectionTitle title={'Statistics'}>
          { this.state.good !== 0 ||
           this.state.neutral !== 0 ||
            this.state.bad !== 0 ?
              (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (<Notification message={'No feedback given'}/>
          )}
        </SectionTitle>
      </div>
    );
  }
}
export default App;
