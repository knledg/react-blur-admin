import _ from 'lodash';
import React from 'react';

export class Breadcrumbs extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  renderBreadcrumbs() {
    let breadcrumbs = this.props.children;
    if (!_.isArray(breadcrumbs)) {
      breadcrumbs = [breadcrumbs];
    }
    return _.map(breadcrumbs, (breadcrumb, key) => {
      return (
        <li key={key}>{breadcrumb}</li>
      );
    });
  }

  render() {
    return (
      <ul className={`breadcrumb al-breadcrumb ${this.props.className}`}>
        {this.renderBreadcrumbs()}
      </ul>
    );
  }
}
