import _ from 'lodash';
import React from 'react';

export class Switch extends React.Component {

  static propTypes = {
    isOn: React.PropTypes.bool,
    onLabel: React.PropTypes.string,
    offLabel: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['primary', 'info', 'warning', 'success', 'danger']),
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
  }

  static defaultProps = {
    isOn: true,
    onLabel: 'ON',
    offLabel: 'OFF',
    type: 'primary',
    className: '',
    disabled: false,
    onChange: _.noop,
  }

  onChange() {
    if (this.props.disabled) {
      return false;
    }

    return this.props.onChange();
  }

  renderOn() {
    return (
      <div className="bootstrap-switch-container">
        <span className={`bootstrap-switch-handle-on bootstrap-switch-${this.props.type}`}>{this.props.onLabel}</span>
        <span className="bootstrap-switch-label">&nbsp;</span>
      </div>
    );
  }

  renderOff() {
    return (
      <div className="bootstrap-switch-container">
        <span className="bootstrap-switch-label pull-left">&nbsp;</span>
        <span className="bootstrap-switch-handle-off bootstrap-switch-default pull-right">{this.props.offLabel}</span>
      </div>
    );
  }

  render() {
    return (
      <div className={`switch-container ${this.props.isOn ? this.props.type : ''} ${this.props.className}`} onClick={e => this.onChange()}>
        <div className={`bootstrap-switch ${this.props.disabled ? 'bootstrap-switch-disabled' : ''} bootstrap-switch-wrapper bootstrap-switch-small bootstrap-switch-animate bootstrap-switch-on`}>
         {this.props.isOn ? this.renderOn() : this.renderOff()}
        </div>
      </div>
    );
  }
}
