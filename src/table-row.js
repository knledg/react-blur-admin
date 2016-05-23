import React from 'react';
import cx from 'classnames';

export class TableRow extends React.Component {

  static propTypes = {
    noTopBorder: React.PropTypes.bool,
  }

  static defaultProps = {
    noTopBorder: true,
  }

  render() {
    const classes = cx({
      'no-top-border': this.props.noTopBorder,
    });

    // black-muted-background
    return (
      <tr className={classes}>
        {this.props.children}
      </tr>
    );
  }
}
