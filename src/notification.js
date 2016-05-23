import React from 'react';

export class Notification extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    type: React.PropTypes.oneOf(['success', 'warning', 'error', 'info']),
    timeout: React.PropTypes.number,
    extendedTimeout: React.PropTypes.number,
    closeButton: React.PropTypes.bool,
    tapToDismiss: React.PropTypes.bool,
    onClose: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    title: '',
    type: 'info',
    timeout: 5000,
    extendedTimeout: 2000,
    allowHtml: true,
    closeButton: true,
    tapToDismiss: true,
  }

  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidMount() {
    if (this.props.timeout) {
      this.timer = setTimeout(this.props.onClose, this.props.timeout);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.extendedTimer) {
      clearTimeout(this.extendedTimer);
    }
  }

  onMouseEnter() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  onMouseLeave() {
    this.extendedTimer = setTimeout(this.props.onClose, this.props.extendedTimeout);
  }

  renderCloseButton() {
    if (!this.props.closeButton) {
      return null;
    }

    return (
      <button
        className="toast-close-button"
        onClick={this.props.onClose}
      >
        ×
      </button>
    );
  }

  renderTitle() {
    if (!this.props.title) {
      return null;
    }
    return (
      <div className='toast-title'>
        {this.props.title}
      </div>
    );
  }

  renderBody() {
    return (
      <div className='toast-body'>
        {this.props.children}
      </div>
    );
  }

  render() {
    return (
      <div
        className={`toast toast-${this.props.type}`}
        onClick={this.props.tapToDismiss ? this.props.onClose : null}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.renderCloseButton()}
        <div>
          {this.renderTitle()}
          {this.renderBody()}
        </div>
      </div>
    );
  }
}

