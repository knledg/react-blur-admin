import React from 'react';
import cx from 'classnames';

export class Table extends React.Component {

  static propTypes = {
    hover: React.PropTypes.bool,
    border: React.PropTypes.bool,
    condense: React.PropTypes.bool,
    stripe: React.PropTypes.bool,
    responsive: React.PropTypes.bool,
    style: React.PropTypes.object,
  }

  static defaultProps = {
    responsive: true,
    hover: true,
    stripe: false,
    condense: false,
    border: false,
  }

  render() {
    const classes = cx({
      table: true,
      'table-hover': this.props.hover,
      'table-bordered': this.props.border,
      'table-condensed': this.props.condense,
      'table-striped': this.props.stripe,
    });

    return (
      <div className={this.props.responsive ? 'table-responsive' : ''}>
        <table className={classes} style={this.props.style}>
          {this.props.children}
        </table>
      </div>
    );
  }
}
