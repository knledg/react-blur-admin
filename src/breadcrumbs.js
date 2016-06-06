import React from 'react';
import _ from 'lodash';

export class Breadcrumbs extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
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
      <ul className='breadcrumb al-breadcrumb'>
        {this.renderBreadcrumbs()}
      </ul>
    );
  }
}
