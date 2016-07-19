import React from 'react';

export class NotificationsAlert extends React.Component {

  static propTypes = {
    notificationCount: React.PropTypes.number.isRequired,
    settingsOnClick: React.PropTypes.func,
    allNotificationsOnClick: React.PropTypes.func,
    markAllAsReadOnClick: React.PropTypes.func,
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
          <a className='dropdown-toggle' onClick={this.onClick.bind(this)}>
            <i className='fa fa-bell-o'/>
            <span>{this.props.notificationCount}</span>
            <div className='notification-ring'/>
          </a>
          <div className='top-dropdown-menu dropdown-menu'>
            <i className='dropdown-arr'/>
            <div className='header clearfix'>
              <strong className='red-text'>Notifications</strong>
                {this.props.markAllAsReadOnClick ? <a onClick={this.props.markAllAsReadOnClick}>Mark All as Read</a> : ''}
                {this.props.settingsOnClick ? <a onClick={this.props.settingsOnClick}>Settings</a> : ''}
            </div>
            <div className='msg-list'>
              {this.props.children}
            </div>
              {this.props.allNotificationsOnClick ? <a onClick={this.props.allNotificationsOnClick}>See all notifications</a> : ''}
          </div>
        </li>
      </ul>
    );
  }
}
