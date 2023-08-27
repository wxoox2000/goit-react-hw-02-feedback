import { Component } from 'react';
import { List, StatItem } from './Statistics.styled';
import { Notification } from 'components/notification/Notification';

export class Statistics extends Component {
  render() {
    const data = this.props.data;
    const isData = Object.values(this.props.data).every((stats) => stats===0);
    return (
      <>
      {isData ? (<Notification message="There is no feedback"/>) : (
        <List>
        <StatItem>
          <p>good: {data.good}</p>
        </StatItem>
        <StatItem>
          <p>neutral: {data.neutral}</p>
        </StatItem>
        <StatItem>
          <p>bad: {data.bad}</p>
        </StatItem>
        <StatItem>
          <p>total: {this.props.total}</p>
        </StatItem>
        <StatItem $percentage ={this.props.percentage}>
          <p>positivePercentage: {this.props.percentage}%</p>
        </StatItem>
      </List>
      )}
      </>
    );
  }
}
