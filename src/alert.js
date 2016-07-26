import _ from 'lodash';
import React from 'react';

export class Alert extends React.Component {

  static propTypes = {
    type: React.PropTypes.string,
    className: React.PropTypes.string,
    isDismissible: React.PropTypes.bool,
    onClose: React.PropTypes.func,
  }

  static defaultProps = {
    type: 'success',
    className: '',
    isDismissible: false,
    onClose: _.noop,
  }

  getAlertClass() {
    switch (this.props.type) {
    case 'success':
      return 'success';

    case 'remove':
    case 'danger':
      return 'danger';

    case 'info':
      return 'info';

    case 'warning':
      return 'warning';

    default:
      throw new Error('Unknown Alert Type');
    }
  }

  renderCloseButton() {
    if (! this.props.isDismissible) {
      return null;
    }
    return (
      <button className="toast-close-button" onClick={this.props.onClose}>
      x
      </button>
    );
  }

  render() {
    return (
      <div className={`alert bg-${this.getAlertClass()} ${this.props.isDismissible ? 'closable' : ''} ${this.props.className}`}>
        {this.renderCloseButton()}
        {this.props.children}
      </div>
    );
  }
}
