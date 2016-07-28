import React from 'react';

import { Button } from './button';

export class Modal extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    buttonText: React.PropTypes.string,
    className: React.PropTypes.string,
    size: React.PropTypes.string,
    icon: React.PropTypes.string,
    align: React.PropTypes.string,
    type: React.PropTypes.string,
    onClose: React.PropTypes.func,
    isOpen: React.PropTypes.bool,
  }

  static defaultProps = {
    className: '',
    size: 'md',
    align: 'left',
    title: '',
    type: 'success',
    isOpen: false,
    icon: '',
  }

  getHeaderClass() {
    switch (this.props.type) {
    case 'success':
      return 'success';

    case 'primary':
      return 'primary';

    case 'remove':
    case 'danger':
      return 'danger';

    case 'info':
      return 'info';

    case 'warning':
      return 'warning';

    default:
      throw new Error('Unknown Modal Type');
    }
  }

  getBodyAlignment() {
    switch (this.props.align) {
    case 'center':
      return 'text-center';

    case 'right':
      return 'text-right';

    case 'left':
    default:
      return '';
    }
  }

  renderIcon() {
    if (! this.props.icon) {
      return null;
    }

    return <i className={this.props.icon} />;
  }

  renderModalSize() {
    switch (this.props.size) {
    case 'xs':
    case 'extra-small':
      return 'xsmall-panel';

    case 'sm':
    case 'small':
      return 'small-panel';

    case 'md':
    case 'medium':
      return 'medium-panel';

    case 'lg':
    case 'large':
      return 'large-panel';

    case 'auto':
    case 'none':
    default:
      return '';
    }
  }

  renderHeader() {
    return (
      <div className={`modal-header bg-${this.getHeaderClass()}`}>
        {this.renderIcon()} {this.props.title}
      </div>
    );
  }

  renderBody() {
    return (
      <div className={`modal-body ${this.getBodyAlignment()}`}>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

  renderFooter() {
    if (!this.props.onClose) {
      return null;
    }
    return (
      <div className='modal-footer'>
        <Button
          type={this.props.type}
          isIconHidden={true}
          size='sm'
          title={this.props.buttonText ? this.props.buttonText : 'OK'}
          onClick={this.props.onClose} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className={`fade ${this.props.isOpen ? 'modal-backdrop in' : ''}`}>
        </div>

        <div className={`modal fade ${this.props.isOpen ? 'modal-open in' : ''} ${this.props.className} ${this.renderModalSize()}`}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              {this.renderHeader()}
              {this.renderBody()}
              {this.renderFooter()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
