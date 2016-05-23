import React, { PropTypes } from 'react';
import { map, reduce, filter } from 'lodash';

// Components
import { Panel } from './panel';

export class Tabs extends React.Component {
  static propTypes = {
    align: PropTypes.string,
    startTab: PropTypes.number,
  }

  static defaultProps = {
    align: 'top',
    startTab: null,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.startTab || 1,
      tabs: [],
      clicked: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTab !== this.state.activeTab;
  }

  onSetActiveTab(activeTab, event) {
    event.preventDefault();
    const state = this.state.clicked ? { activeTab } : { activeTab, clicked: true };
    this.setState(state);
  }

  getActiveTab(tabs, activeTab) {
    return filter(tabs, (tab, index) => activeTab === index + 1);
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

  renderTabContent(tabs, activeTab) {
    return reduce(this.getActiveTab(tabs, activeTab), (acc, tab) => {
      return tab.props.children;
    }, []);
  }

  renderTabs(tabs, activeTab) {
    return map(tabs, (tab, index) => {
      const isActive = activeTab === index + 1 ? 'active' : '';
      return (
        <li className={isActive} onClick={this.onSetActiveTab.bind(this, index + 1)} key={index}>
          {tab}
        </li>
      );
    });
  }

  render() {
    const alignment = this.getTabsAlignment(this.props.align);
    const isHorizontal = alignment === '';
    const startTab = this.props.startTab && !this.state.clicked ? this.props.startTab : this.state.activeTab;

    return (
      <Panel className={(isHorizontal ? 'horizontal-tabs' : '') + ' tabs-panel'}>
        <div className={alignment}>
          <ul className='nav nav-tabs'>
           {this.renderTabs(this.props.children, startTab)}
          </ul>

          <div className='tab-content'>
            <div className='tab-pane active'>
              {this.renderTabContent(this.props.children, startTab)}
            </div>
          </div>
        </div>
      </Panel>
    );
  }
}
