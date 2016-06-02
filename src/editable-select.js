import React from 'react';

import {Select} from './select';

export class EditableSelect extends React.Component {

  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.node,
    placeholder: React.PropTypes.string,
    options: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        value: React.PropTypes.string,
        label: React.PropTypes.string,
      }),
    ),
    isSearchable: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
  }

  static defaultProps = {
    value: '',
    placeholder: 'No Value',
  }

  constructor(props) {
    super(props);
    this.state = {
      isBeingEdited: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({isBeingEdited: false});
    }
  }

  onSetEditing(isBeingEdited) {
    if (this.props.disabled) {
      return false;
    }

    return this.setState({isBeingEdited});
  }

  onChange(value) {
    this.setState({isBeingEdited: false});
    this.props.onChange(value);
  }

  render() {
    if (! this.state.isBeingEdited) {
      const option = _.find(this.props.options, {value: this.props.value});
      return (
        <span className={`editable editable-click ${this.props.disabled ? 'disabled' : ''}`} onClick={e => this.onSetEditing(true)}>
          {option && option.label || this.props.placeholder}
        </span>
      );
    }

    return (
      <form className='form-inline editable-wrap editable-text' role='form' onSubmit={e => e.preventDefault()}>
        <div className='editable-controls form-group'>
          <Select
            isOpen={true}
            {...this.props}
            onChange={value => this.onChange(value)}
            onToggleOpen={isOpen => this.onSetEditing(isOpen)}
            className='editable-has-buttons editable-input' />
        </div>
      </form>
    );
  }
}
