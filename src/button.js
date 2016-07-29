import _ from 'lodash';
import React from 'react';

export class Button extends React.Component {

  static propTypes = {
    type: React.PropTypes.string,
    onClick: React.PropTypes.func,
    title: React.PropTypes.string,
    size: React.PropTypes.oneOf(['xs', 'sm', 'mm', 'md', 'xm', 'lg']),
    disabled: React.PropTypes.bool,
    isIconHidden: React.PropTypes.bool,
    icon: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element,
    ]),
  }

  static defaultProps = {
    onClick: function noop() { },
    size: 'md',
    disabled: false,
    isIconHidden: false,
    icon: null,
  }

  renderIcon(icon) {
    if (! (icon || this.props.icon) || this.props.isIconHidden) {
      return null;
    }
    if (this.props.icon) {
      return _.isString(this.props.icon) ? <i className={this.props.icon}/> : this.props.icon;
    }
    return <i className = {icon}/>;
  }

  render() {
    let classes;
    let icon;
    let title;

    switch (this.props.type) {
    case 'add':
    case 'primary':
      classes = `btn-primary btn-${this.props.size}`;
      icon = 'fa fa-plus';
      title = 'Add';
      break;

    case 'success':
      classes = `btn-success btn-${this.props.size}`;
      icon = 'fa fa-check';
      title = 'Success';
      break;

    case 'remove':
    case 'danger':
      classes = `btn-danger btn-${this.props.size}`;
      icon = 'fa fa-minus';
      title = 'Remove';
      break;

    case 'info':
      classes = `btn-info btn-${this.props.size}`;
      icon = 'fa fa-info-circle';
      title = 'Info';
      break;

    case 'warning':
      classes = `btn-warning btn-${this.props.size}`;
      icon = 'fa fa-exclamation-circle';
      title = 'Warning';
      break;

    case 'default':
    default:
      classes = `btn-default btn-${this.props.size}`;
      icon = '';
      title = 'Default';
      break;
    }

    return (
      <button className={`btn ${classes}`} disabled={this.props.disabled} onClick={this.props.onClick}>
        {this.renderIcon(icon)} {this.props.hasOwnProperty('title') ? this.props.title : title}
      </button>
    );
  }
}
