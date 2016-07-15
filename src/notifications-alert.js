import React from 'react';
import {noop} from 'lodash';
import {Link} from 'react-router';

export class NotificationsAlert extends React.Component {

  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
    notifications: React.PropTypes.number.isRequired,
    className: React.PropTypes.string,
    isExpanded: React.PropTypes.bool,
    hasPopUp: React.PropTypes.bool,
  }

  static defaultProps = {
    onChange: noop,
    hasPopUp: true,
    isExpanded: false,
    className: '',
  }

  onChange(value) {

  }

  renderNotifications() {

  }

  render() {
    return (
      <div className={`'dropdown-toggle' ${this.state.hasPopUp} ${this.state.isExpanded ? 'expanded' : ''}`}>
        <i className='fa fa-bell-o'/>
        <span>{this.props.notifications}</span>
        <div className='notification-ring'></div>
        <div className='top dropdown-menu dropdown-menu'/>
        <i className='dropdown-arr'/>
        <div className='header clearfix'>
          <strong>Notifications</strong>
          <Link to=''>Mark All as Read</Link>
          <Link to=''>Settings</Link>
        </div>
        <div className='msg-list'>
          {this.renderNotifications()}
        </div>
      </div>
    );
  }
}
