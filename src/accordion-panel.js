import React from 'react';
import _ from 'lodash';

export class AccordionPanel extends React.Component {

  static propTypes = {
    heading: React.PropTypes.string,
    icon: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element,
    ]),

  }

  static defaultProps = {
    heading: '',
    icon: null,
  }

  renderIcon() {
    if (!this.props.icon) {
      return null;
    }

    return _.isString(this.props.icon) ? <i className={this.props.icon}/> : this.props.icon;
  }

//      <div>
//       <div className='panel-collapse collapse'>
//          <div className='panel-body'>
//
//          </div>
//        </div>
//      </div>
//    );

  render() {
    return (
      <h4 className='panel-title'>
        <span>
          <span>{this.props.heading}</span> {this.renderIcon()}
        </span>
      </h4>
    );
  }
}
