import React from 'react';

export class Accordion extends React.Component {

  static propTypes = {
    heading: React.PropTypes.string,
    className: React.PropTypes.string,
    panelOpen: React.PropTypes.number,
    icon: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element,
    ]),
  }

  static defaultProps = {
    heading: '',
    className: '',
    isPanelOpen: false,
  }

  // onClick() {
  //   if (!this.props.panelOpen) {
  //     return this.props.panelOpen;
  //   }
  // }
  //   return null;
  // }

  isPanelOpen() {
    if (this.props.panelOpen) {
      return this.props.panelOpen;
    }
    else if null;
  }

  renderIcon(icon) {
    if (!this.props.icon) {
      return null;
    }
    if (this.props.icon) {
      return _.isString(this.props.icon) ? <i className={this.props.icon}/> : this.props.icon;
    }
    return <i className = {icon}/>;
  }

  renderAccordionPanels() {
    const panels = _.isArray(this.props.children) ? this.props.children : [this.props.children];
    return _.map(panels, (panel, index) => {
      //
    });
  }

  render() {
    return (
      <div className='col-md-6'>
        <div className='panel-group'>
          <div
            className={`panel panel-primary bootstrap-panel accordion-panel ${this.props.className}`}
            panel-class='panel-primary bootstrap-panel accordion-panel'>
              {this.renderAccordionPanels()}
          </div>
        </div>
      </div>
    );
  }
}
