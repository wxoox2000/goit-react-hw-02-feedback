import { Component } from 'react';
import { List, Option } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    return (
      <List>
        <li>
          <Option id='good' onClick={this.props.feedback}>Good</Option>
        </li>
        <li>
          <Option id='neutral' onClick={this.props.feedback}>Neutral</Option>
        </li>
        <li>
          <Option id='bad' onClick={this.props.feedback}>Bad</Option>
        </li>
      </List>
    );
  }
}
