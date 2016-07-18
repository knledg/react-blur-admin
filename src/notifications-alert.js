import React from 'react';
import {Link} from 'react-router';

export class NotificationsAlert extends React.Component {

  static propTypes = {
    notificationCount: React.PropTypes.number.isRequired,
    settingsUrl: React.PropTypes.string,
    allNotificationsUrl: React.PropTypes.string,
    markAllAsRead: React.PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
  }

  onClick() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  render() {
    return (

      <ul className='al-msg-center clearfix'>
        <li className={`dropdown ${this.state.isExpanded ? 'open' : ''}`}>
          <Link to='' className='dropdown-toggle' onClick={this.onClick.bind(this)}>
            <i className='fa fa-bell-o'/>
            <span>{this.props.notificationCount}</span>
            <div className='notification-ring'/>
          </Link>
          <div className='top-dropdown-menu dropdown-menu'>
            <i className='dropdown-arr'/>
            <div className='header clearfix'>
              <strong className='red-text'>Notifications</strong>
                {this.props.markAllAsRead ? <Link onClick={this.props.markAllAsRead} to=''>Mark All as Read</Link> : ''}
                {this.props.settingsUrl ? <Link to={this.props.settingsUrl}>Settings</Link> : ''}
            </div>
            <div className='msg-list'>
              {this.props.children}
            </div>
              {this.props.allNotificationsUrl ? <Link to={this.props.allNotificationsUrl}>See all notifications</Link> : ''}
          </div>
        </li>
      </ul>
    );
  }
}
