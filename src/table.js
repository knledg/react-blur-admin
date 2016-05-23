import React from 'react';
import cx from 'classnames';

export class Table extends React.Component {

  static propTypes = {
    tableHover: React.PropTypes.bool,
    tableBordered: React.PropTypes.bool,
    tableCondensed: React.PropTypes.bool,
    tableStriped: React.PropTypes.bool,
    tableResponsive: React.PropTypes.bool,
  }

  static defaultProps = {
    tableResponse: true,
    tableHover: true,
    tableStriped: false,
    tableCondensed: false,
    tableBordered: false,
  }

  render() {
    const classes = cx({
      table: true,
      'table-hover': this.props.tableHover,
      'table-bordered': this.props.tableBordered,
      'table-condensed': this.props.tableCondensed,
      'table-striped': this.props.tableStriped,
      'table-responsive': this.props.tableResponsive,
    });

    return (
      <table className={classes}>
        {this.props.children}
      </table>
    );
  }
}
