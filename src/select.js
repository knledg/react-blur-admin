import _ from 'lodash';
import React from 'react';

export class Select extends React.Component {

  static propTypes = {
    placeholder: React.PropTypes.string,
    maxHeight: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onRenderValue: React.PropTypes.func,
    options: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        value: React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.number,
        ]),
        label: React.PropTypes.node,
      }),
    ),
    value: React.PropTypes.node,
    isSearchable: React.PropTypes.bool,
    isOpen: React.PropTypes.bool,
    onSearch: React.PropTypes.func,
    onToggleOpen: React.PropTypes.func, // used when the parent needs to know that isOpen was toggled
  }

  static defaultProps = {
    placeholder: '',
    onChange: _.noop,
    value: '',
    isSearchable: false,
    isOpen: false,
    onToggleOpen: _.noop,
  }

  constructor(props) {
    super(props);

    this.state = {
      value: this.getValue(),
      activeIndex: 0,
      isOpen: this.props.isOpen,
      searchValue: '',
      visibleOptions: this.props.options,
    };
  }

  componentDidMount() {
    this.onFocus();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.setState({isOpen: nextProps.isOpen}, this.onFocus);
    }

    if (nextProps.options !== this.props.options) {
      this.setState({visibleOptions: nextProps.options, searchValue: ''});
    }

    if (this.props.value && ! nextProps.value) {
      this.setState({activeIndex: 0, value: this.getValue(nextProps)});
    }

    this.setState({value: this.getValue(nextProps)});
  }

  onFocus() {
    if (this.state.isOpen && this.props.isSearchable) {
      this.refs['select-search'].focus();
    }
  }

  onToggleOpen() {
    this.props.onToggleOpen(! this.state.isOpen);
    this.setState({ isOpen: ! this.state.isOpen }, this.onFocus);
  }

  onSetActiveIndex(value) {
    this.setState({activeIndex: value, isOpen: true}, this.onFocus);
  }

  onSelectValue(selectedValue) {
    const selectedOpt = _.find(this.props.options, { value: selectedValue });
    const value = selectedOpt && selectedOpt.label ? selectedOpt.label : this.props.placeholder;
    this.setState({ isOpen: false, value });
    this.props.onChange(selectedValue);
  }

  onTextSearch(event) {
    let visibleOptions;
    const searchValue = event.currentTarget.value;

    // Used if the developer needs custom search functionality.
    if (this.props.onSearch) {
      visibleOptions = this.props.onSearch(searchValue, this.props.options);
    } else {
      visibleOptions = this.getVisibleOptions(event.currentTarget.value);
    }

    this.setState({searchValue, visibleOptions});
  }

  onHandleKeyDown(e) {
    if (e.keyCode === 27) { // esc
      return this.onToggleOpen();
    } else if (e.keyCode === 13) { // enter
      e.preventDefault(); // prevent the onClick event from firing also, which could reopen select options
      const selectedOption = _.find(this.state.visibleOptions, (option, index) => {
        return index === this.state.activeIndex;
      });

      if (selectedOption) {
        return this.onSelectValue(selectedOption.value);
      }
    } else if (e.keyCode === 40) { // down
      e.preventDefault(); // prevent browser scrolling
      let activeIndex = this.state.activeIndex + 1;
      if (activeIndex >= this.state.visibleOptions.length) {
        activeIndex = this.state.visibleOptions.length - 1; // - 1 because the index starts at 0
      }

      return this.onSetActiveIndex(activeIndex);
    } else if (e.keyCode === 38) { // up
      e.preventDefault(); // prevent browser scrolling
      let activeIndex = this.state.activeIndex - 1;
      if (activeIndex < 0) {
        activeIndex = 0;
      }

      return this.onSetActiveIndex(activeIndex);
    }

    return e;
  }

  getValue(props = this.props) {
    if (props.value && props.onRenderValue) {
      return props.onRenderValue(props.value);
    }

    const option = _.find(props.options, {value: props.value});
    return option && option.label || props.placeholder;
  }

  getVisibleOptions(searchValue) {
    if (! searchValue) {
      return this.props.options;
    }

    return _.filter(this.props.options, option => {
      return option.label.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });
  }

  isOpen() {
    return this.state.isOpen ? 'open' : '';
  }

  renderValue() {
    return (
      <span className='filter-option pull-left'>
        {this.state.value}
      </span>
    );
  }

  renderSearch() {
    if (! this.props.isSearchable) {
      return null;
    }

    return (
      <div className='bs-searchbox'>
        <input
          ref='select-search'
          type='text'
          className='form-control'
          value={this.state.searchValue}
          onKeyDown={e => this.onHandleKeyDown(e)}
          onChange={e => this.onTextSearch(e)} />
      </div>
    );
  }

  renderOption(option, index, isSelected, isActive) {
    return (
      <li
        key={index}
        className={`${isSelected} ${isActive}`}
        onClick={e => this.onSelectValue(option.value)}
        onMouseOver={e => this.onSetActiveIndex(index)}>
        <a tabIndex={index}>
          <i className={isSelected ? 'fa fa-check' : ''} /> <span className='text'>{option.label}</span>
        </a>
      </li>
    );
  }

  renderOptions() {
    if (! this.props.options) {
      return null;
    }

    let options = _.map(this.state.visibleOptions, (option, index) => {
      const isSelected = this.props.value === option.value ? 'selected' : '';
      const isActive = this.state.activeIndex === index ? 'active' : '';

      return this.renderOption(option, index, isSelected, isActive);
    });

    let style = {};
    if (this.props.maxHeight) {
      style = {
        maxHeight: this.props.maxHeight,
        overflow: 'auto',
      };
    }

    return (
      <ul style={style} className='dropdown-menu inner'>
        {options}
      </ul>
    );
  }

  render() {
    return (
      <div className='form-group'>
        <div className={`btn-group bootstrap-select form-control ${this.isOpen()}`}>
          <button
            type="button"
            className='btn dropdown-toggle btn-default'
            onClick={e => this.onToggleOpen()}
            onKeyDown={e => this.onHandleKeyDown(e)}>
            {this.renderValue()}
            <span className='bs-caret'>
              <span className='caret' />
            </span>
          </button>
          <div className='dropdown-menu open'>
            {this.renderSearch()}
            {this.renderOptions()}
          </div>
        </div>
      </div>
    );
  }
}
