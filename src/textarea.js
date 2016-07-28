import React from 'react';

export class Textarea extends React.Component {

  static propTypes = {
    name: React.PropTypes.string,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool,
    value: React.PropTypes.node.isRequired,
  }

  static defaultProps = {
    name: '',
    className: '',
    value: '',
    disabled: false,
  }

  renderLabel() {
    if (!this.props.label) {
      return null;
    }
    return (
      <label>{this.props.label}</label>
    );
  }

  renderTextarea() {
    return (
      <textarea
        className="form-control"
        name={this.props.name}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        disabled={this.props.disabled}
        ref='textarea'
        ></textarea>
    );
  }

  render() {
    return (
      <div className={`form-group ${this.props.className}`}>
        {this.renderLabel()}
        {this.renderTextarea()}
      </div>
    );
  }
}
