import _ from 'lodash';
import React from 'react';

export class Select extends React.Component {

  static propTypes = {
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func,
    options: React.PropTypes.array,
    value: React.PropTypes.string,
    isSearchable: React.PropTypes.bool,
  }

  static defaultProps = {
    placeholder: '',
    open: false,
    onChange: () => {},
    value: '',
    isSearchable: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.placeholder,
      active: '',
      isOpen: false,
      searchValue: '',
    };
  }

  onToggleOpen() {
    this.setState({ isOpen: ! this.state.isOpen }, () => {
      if (this.state.isOpen && this.props.isSearchable) {
        this.refs['select-search'].focus();
      }
    });
  }

  onSelectValue(selectedValue) {
    const selectedOpt = _.find(this.props.options, { value: selectedValue });
    const value = selectedOpt && selectedOpt.label ? selectedOpt.label : this.props.placeholder;
    this.setState({ isOpen: false, value });
    this.props.onChange(selectedValue);
  }

  onTextSearch(event) {
    this.setState({searchValue: event.currentTarget.value});
  }

  getVisibleOptions() {
    if (! this.state.searchValue) {
      return this.props.options;
    }

    return _.filter(this.props.options, (option) => {
      return option.label.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1;
    });
  }

  isOpen() {
    return this.state.isOpen ? 'open' : '';
  }

  renderPlaceholder() {
    if (! this.props.placeholder) {
      return <span />;
    }

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
          onChange={e => this.onTextSearch(e)} />
      </div>
    );
  }

  renderOption(option, index, isSelected, isActive) {
    return (
      <li
        key={`${option.value}-${option.label}`}
        className={`${isSelected} ${isActive}`}
        onClick={e => this.onSelectValue(option.value)}>
        <a taxIndex={index}>
          <span className='text'>{option.label}</span>
        </a>
      </li>
    );
  }

  renderOptions() {
    if (! this.props.options) {
      return null;
    }

    let options = _.map(this.getVisibleOptions(), (option, index) => {
      const isSelected = this.props.value === option.value ? 'selected' : '';
      const isActive = this.state.activeValue === option.value ? 'active' : '';

      return this.renderOption(option, index + 1, isSelected, isActive);
    });

    return (
      <ul className='dropdown-menu inner'>
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
            onClick={e => this.onToggleOpen()}>
            {this.renderPlaceholder()}
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
