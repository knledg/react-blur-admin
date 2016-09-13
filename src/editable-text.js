import React from 'react';

export class EditableText extends React.Component {

  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
    isOpen: React.PropTypes.bool,
    onValidate: React.PropTypes.func,
    value: React.PropTypes.node,
    hasError: React.PropTypes.bool,
    errorHelpLabel: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    disabled: React.PropTypes.bool,
  }

  static defaultProps = {
    value: '',
    isOpen: false,
    hasError: false,
    errorHelpLabel: '',
    placeholder: 'No Value',
    disabled: false,
  }

  constructor(props) {
    super(props);

    this.state = {
      dirtyValue: this.props.value,
      isBeingEdited: this.props.isOpen,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ dirtyValue: nextProps.value, isBeingEdited: nextProps.isOpen });
    }
  }

  onSetEditing(isBeingEdited) {
    if (this.props.disabled) {
      return false;
    }

    return this.setState({isBeingEdited}, () => {
      if (this.state.isBeingEdited) {
        this.refs['edit-input'].focus();
      }
    });
  }

  onCancelEditing() {
    this.setState({isBeingEdited: false, dirtyValue: this.props.value});
  }

  onSubmit() {
    const validationResult = this.getValidationResult();
    if (validationResult === 'error') {
      return false;
    }

    return this.props.onChange(this.state.dirtyValue);
  }

  onTextChange(e) {
    return this.setState({dirtyValue: e.currentTarget.value});
  }

  onHandleKeyDown(e) {
    if (e.keyCode === 27) { // esc
      return this.onCancelEditing();
    } else if (e.keyCode === 13) { // enter
      return this.onSubmit();
    }

    return e;
  }

  getValidationResult() {
    if (! this.props.onValidate) {
      return '';
    }

    const validationResult = this.props.onValidate(this.state.dirtyValue);
    if (validationResult === true || validationResult === 'success') {
      return 'success';
    } else if (validationResult === false || validationResult === 'error') {
      return 'error';
    } else if (validationResult === 'warning') {
      return 'warning';
    }

    return '';
  }

  getStatus(status) {
    return status ? `has-${status}` : '';
  }

  renderErrorHelpLabel(status) {
    if (! this.props.errorHelpLabel || status !== 'error') {
      return null;
    }

    return (
      <div className='editable-error help-block'>{this.props.errorHelpLabel}</div>
    );
  }

  render() {
    const status = this.getValidationResult(); // '', warning, success, error

    if (! this.state.isBeingEdited) {
      return (
        <span className={`editable editable-click ${this.props.disabled ? 'disabled' : ''}`} onClick={e => this.onSetEditing(true)}>
          {this.props.value || this.props.placeholder}
        </span>
      );
    }

    return (
      <form className='form-inline editable-wrap editable-text' role='form' onSubmit={e => e.preventDefault()}>
        <div className={`editable-controls form-group ${this.getStatus(status)}`}>
          <input
            type='text'
            value={this.state.dirtyValue}
            onChange={e => this.onTextChange(e)}
            onKeyDown={e => this.onHandleKeyDown(e)}
            ref='edit-input'
            className='editable-has-buttons editable-input form-control' />
          <span className='editable-buttons button-wrapper'>
            <button type='button' onClick={e => this.onSubmit(status)} className='btn btn-primary btn-with-icon'>
              <i className='fa fa-check'></i>
            </button>
            <button type='button' onClick={e => this.onCancelEditing()} className='btn btn-default btn-with-icon'>
              <i className='fa fa-close'></i>
            </button>
          </span>
          {this.renderErrorHelpLabel(status)}
        </div>
      </form>
    );
  }
}
