import { Component } from 'react';
import { SectionBlock } from './section.styled';

export class Section extends Component {
  render() {
    const {children} = this.props;
    return (
      <SectionBlock>
        <h2>{this.props.title}</h2>
        {children}
      </SectionBlock>
    )
  }
}
