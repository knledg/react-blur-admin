import React from 'react';

export class NotificationAlert extends React.Component {

  static propTypes = {
    user: React.PropTypes.object,
    subject: React.PropTypes.string,
    createdAt: React.PropTypes.string,
    onClick: React.PropTypes.func,
    relativeTime: React.PropTypes.string,
    timeStamp: React.PropTypes.string,
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  renderBody() {
    return (
      <div onClick={this.onClick.bind(this)} className='clearfix'>
        <div className='img-area'>
          <img src={this.props.user.picture} className='photo-msg-item'/>
        </div>
        <div className='msg-area'>
          <div>{this.props.subject}</div>
          <span title={this.props.timeStamp}>{this.props.relativeTime}</span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderBody()}
      </div>
    );
  }
}
