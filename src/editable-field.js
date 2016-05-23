import React from 'react';

export class EditableField extends React.Component {

  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
    onValidate: React.PropTypes.func,
    value: React.PropTypes.node.isRequired,
    hasError: React.PropTypes.bool,
    errorHelpLabel: React.PropTypes.string,
  }

  static defaultProps = {
    value: '',
    hasError: false,
    errorHelpLabel: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      dirtyValue: this.props.value,
      isBeingEdited: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ dirtyValue: nextProps.value, isBeingEdited: false });
    }
  }

  onSetEditing(isBeingEdited) {
    this.setState({isBeingEdited}, () => {
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
    if (e.keyCode === 27) {
      return this.onCancelEditing();
    } else if (e.keyCode === 13) {
      return this.onSubmit();
    }

    return this.setState({dirtyValue: e.currentTarget.value});
  }

  onHandleKeyDown(e) {
    if (e.keyCode === 27) {
      return this.onCancelEditing();
    } else if (e.keyCode === 13) {
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

    throw new Error(`Unknown validation result on EditableField: ${validationResult}`);
  }

  getStatus(status) {
    return status ? `has-${status}` : '';
  }

  renderErrorHelpLabel() {
    if (! this.props.errorHelpLabel) {
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
        <span className='editable editable-click' onClick={e => this.onSetEditing(true)}>
          {this.props.value}
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
              <i className='ion-checkmark-round'></i>
            </button>
            <button type='button' onClick={e => this.onCancelEditing()} className='btn btn-default btn-with-icon'>
              <i className='ion-close-round'></i>
            </button>
          </span>
          {this.renderErrorHelpLabel()}
        </div>
      </form>
    );
  }
}
