import _ from 'lodash';
import React, {PropTypes} from 'react';

// Components
import {Panel} from './panel';

export class Tabs extends React.Component {
  static propTypes = {
    align: PropTypes.string,
    startTab: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }

  static defaultProps = {
    align: 'top',
    startTab: 1,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.startTab,
      tabs: [],
    };
  }

  onSetActiveTab(tab, index, event) {
    event.preventDefault();

    let activeTab;
    if (_.isString(this.props.startTab)) {
      activeTab = tab.props.name;
    } else {
      activeTab = index + 1;
    }

    this.setState({activeTab});
  }

  getTabsAlignment(alignment) {
    switch (alignment) {
    case 'left':
      return 'tabs-left';
    case 'right':
      return 'tabs-right';
    case 'top':
    default:
      return '';
    }
  }

  renderTabs(tabs) {
    return _.map(tabs, (tab, index) => {
      let isActive = '';
      if (
        (_.isString(this.state.activeTab) && tab.props.name === this.state.activeTab) ||
        (_.isNumber(this.state.activeTab) && this.state.activeTab === index + 1)) {
        // If the user passes in a key to the tab and startTab is a string, check if it's active via the Tab's name. e.g.
        /*
          <Tabs startTab='first'>
            <Tab name='first'>
              First
            </Tab>
            <Tab name='second'>
              Second
            </Tab>
          </Tabs>
         */
        // Else if startTab is a number, calculate based on the order the tabs are passed in
        isActive = 'active';
      }

      return (
        <li className={isActive} onClick={e => this.onSetActiveTab(tab, index, e)} key={index}>
          {tab}
        </li>
      );
    });
  }

  renderActiveTabBody(tabs) {
    // if this.state.activeTab is a string, try changing if the <Tab>s have a name and if one has a matching name, return it
    let activeTab;
    if (_.isString(this.state.activeTab)) {
      activeTab = _.find(tabs, tab => tab.props.name === this.state.activeTab);
    } else {
      activeTab = _.find(tabs, (tab, index) => this.state.activeTab === index + 1);
    }

    return activeTab ? activeTab.props.children : null;
  }

  render() {
    const tabs = _.isArray(this.props.children) ? this.props.children : [this.props.children];
    const alignment = this.getTabsAlignment(this.props.align);
    const isHorizontal = alignment === '';

    return (
      <Panel className={(isHorizontal ? 'horizontal-tabs' : '') + ' tabs-panel'}>
        <div className={alignment}>
          <ul className='nav nav-tabs'>
           {this.renderTabs(tabs)}
          </ul>

          <div className='tab-content'>
            <div className='tab-pane active'>
              {this.renderActiveTabBody(tabs)}
            </div>
          </div>
        </div>
      </Panel>
    );
  }
}
