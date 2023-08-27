import { Component } from 'react';
import { List } from './Statistics.styled';
import { Notification } from 'components/notification/Notification';

export class Statistics extends Component {
  render() {
    const data = this.props.data;
    const isData = Object.values(this.props.data).every((stats) => stats===0);
    return (
      <>
      {isData ? (<Notification message="There is no feedback"/>) : (
        <List>
        <li>
          <p>good: {data.good}</p>
        </li>
        <li>
          <p>neutral: {data.neutral}</p>
        </li>
        <li>
          <p>bad: {data.bad}</p>
        </li>
        <li>
          <p>total: {this.props.total}</p>
        </li>
        <li>
          <p>positivePercentage: {this.props.percentage}%</p>
        </li>
      </List>
      )}
      </>
    );
  }
}
