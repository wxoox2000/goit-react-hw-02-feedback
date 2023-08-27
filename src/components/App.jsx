import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Section } from './section/section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Wrap } from './App.styled';

export class App extends Component {
  static defaultProps = {
    step: 1,
    initvalue: 0,
  };
  state = {
    good: this.props.initvalue,
    neutral: this.props.initvalue,
    bad: this.props.initvalue,
  };
  decrementValue = evt => {
    const clicked = evt.target.id;
    const updateState = {};
    updateState[clicked] = this.state[clicked] + this.props.step;
    this.setState(() => updateState);
  };
  totalStats = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  positivePercentage = () => {
    if (this.state.good === 0) {
      return 0;
    } else {
      return ((this.state.good / this.totalStats())*100).toFixed(1);
    }
  };
  render() {
    return (
      <Wrap>
        <Section title="Please leave feedback">
          <FeedbackOptions feedback={this.decrementValue} />
        </Section>
        <Section title="Statistics">
          <Statistics
            data={this.state}
            total={this.totalStats()}
            percentage={this.positivePercentage()}
          />
        </Section>
        <GlobalStyles />
      </Wrap>
    );
  }
}
