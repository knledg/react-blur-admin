import React from 'react';
import { Row, Col } from 'react-flex-proto';

export class Page extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    actionBar: React.PropTypes.node,
  }

  renderTitle() {
    if (! this.props.title) {
      return null;
    }

    return (
      <Col padding={0}>
        <h1 className='al-title'>{this.props.title}</h1>
      </Col>
    );
  }

  renderActionBar() {
    if (! this.props.actionBar) {
      return null;
    }

    return (
      <Col align='right'>
        {this.props.actionBar}
      </Col>
    );
  }

  render() {
    return (
      <div>
        <div className="content-top clearfix">
          <Row>
            {this.renderTitle()}
            {this.renderActionBar()}
          </Row>
        </div>
        {this.props.children}
      </div>
    );
  }
}
