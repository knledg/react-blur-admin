import React from 'react';

export class TableBody extends React.Component {
  render() {
    return (
      <tbody>
        {this.props.children}
      </tbody>
    );
  }
}
