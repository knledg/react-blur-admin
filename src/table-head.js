import React from 'react';
import cx from 'classnames';

export class TableHead extends React.Component {

  static propTypes = {
    blackMutedBackground: React.PropTypes.bool,
  }

  static defaultProps = {
    blackMutedBackground: true,
  }

  render() {
    const classes = cx({
      'black-muted-bg': this.props.blackMutedBackground,
    });

    return (
      <thead>
        <tr className={classes}>
          {this.props.children}
        </tr>
      </thead>
    );
  }
}
