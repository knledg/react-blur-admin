import React from 'react';
import sinon from 'sinon';
import {expect} from 'chai';
import {noop} from 'lodash';
import {shallow} from 'enzyme';

import { Input } from '../src';

describe('<Input/>', function() {
  it('Has default props', function() {
    const component = shallow(<Input onChange={noop}/>);
    expect(component.find('input').hasClass('form-control')).to.equal(true);
    expect(component.find('div.form-group').hasClass('has-feedback')).to.equal(true);
    expect(component.find('input').hasClass('autoFocus')).to.equal(false);
    expect(component.find('input').prop('disabled')).to.equal(false);
  });
  describe('<Input/>', function() {
    it('Has default props');
    it('Is a text type', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => true} type='text'/>);
      expect(component.find('input').hasClass('form-control')).to.equal(true);
    });

    it('Has autofocus', function() {
      const component = shallow(<Input onChange={noop} autoFocus={true} onValidate={() => true} type='text'/>);
      expect(component.find('input').prop('autoFocus')).to.equal(true);
    });

    it('Is disabled', function() {
      const component = shallow(<Input onChange={noop} disabled={true} type='text'/>);
      expect(component.find('input').prop('disabled')).to.equal(true);
    });

    it('Renders name', function() {
      const component = shallow(<Input onChange={noop} name='testing name' type='radio'/>);
      expect(component.find('label > input').prop('name')).to.contain('testing name');
    });

    it('Has label', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => true} label='testing label' type='text'/>);
      expect(component.find('label.control-label').hasClass('control-label')).to.equal(true);
      expect(component.find('label.control-label').text()).to.equal('testing label');
    });

    it('ClassName is rendered', function() {
      const component = shallow(<Input onChange={noop} className='testing ClassName' type='text'/>);
      expect(component.find('div.form-group').hasClass('testing ClassName')).to.equal(true);
    });

    it('is not rounded', function() {
      const component = shallow(<Input onChange={noop} isRounded={false} type='text'/>);
      expect(component.find('input.form-control-rounded').length).to.equal(0);
    });

    it('is rounded', function() {
      const component = shallow(<Input onChange={noop} isRounded={true} type='text'/>);
      expect(component.find('input.form-control').hasClass('form-control-rounded')).to.equal(true);
    });

    it('Helplabel is rendered', function() {
      const component = shallow(<Input onChange={noop} helpLabel='testing helpLabel' type='text'/>);
      expect(component.find('div.help-block').hasClass('help-block sub-little-text')).to.equal(true);
      expect(component.find('div.help-block').text()).to.equal('testing helpLabel');
      expect(component.find('div.help-block').length).to.equal(1);
    });

    it('Has placeholder', function() {
      const component = shallow(<Input onChange={noop} placeholder='testing placeholder' type='text'/>);
      expect(component.find('input').prop('placeholder')).to.contain('testing placeholder');
    });

    it('It has feedback icon', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => true} hasFeedbackIcon={true} type='text'/>);
      expect(component.find('div.form-group').hasClass('has-feedback')).to.equal(true);
    });

    it('It has a type of checkbox', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => true} hasFeedbackIcon={true} type='checkbox'/>);
      expect(component.find('div.checkbox').hasClass('checkbox')).to.equal(true);
    });

    it('Checkbox renders green/success check', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => true} hasFeedbackIcon={true} type='checkbox'/>);
      expect(component.find('div.form-group').hasClass('has-success')).to.equal(true);
    });

    it('Checkbox renders yellow/warning check', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => 'warning'} hasFeedbackIcon={true} type='checkbox'/>);
      expect(component.find('div.form-group').hasClass('has-warning')).to.equal(true);
    });

    it('Checkbox sends checked value onClick', function() {
      let isChecked = false;
      const onChange = function(newValue) {
        isChecked = newValue;
      };

      let component = shallow(<Input onChange={onChange} value={isChecked} type='checkbox'/>);
      component.find('input').simulate('click');
      expect(isChecked).to.equal(true);

      component = shallow(<Input onChange={onChange} value={isChecked} type='checkbox'/>);
      component.find('input').simulate('click');
      expect(isChecked).to.equal(false);
    });

    it('Checkbox renders red/error check', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => false} hasFeedbackIcon={true} type='checkbox'/>);
      expect(component.find('div.form-group').hasClass('has-error')).to.equal(true);
    });

    it('Checkbox renders grey/no validation check', function() {
      const component = shallow(<Input onChange={noop} hasFeedbackIcon={true} type='checkbox'/>);
      expect(component.find('div.checkbox').hasClass('checkbox')).to.equal(true);
    });

    it('Checkbox is disabled', function() {
      const component = shallow(<Input onChange={noop} disabled={true} hasFeedbackIcon={true} type='checkbox'/>);
      expect(component.find('input').prop('type')).to.contain('checkbox');
      expect(component.find('input').prop('disabled')).to.equal(true);
    });

    it('It has a type of checkbox', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => true} hasFeedbackIcon={true} type='checkbox'/>);
      expect(component.find('div.checkbox').hasClass('checkbox')).to.equal(true);
    });

    it('It has a type of radio', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => true} hasFeedbackIcon={true} type='radio'/>);
      expect(component.find('input').prop('type')).to.equal('radio');
    });

    it('It has a type of radio disabled', function() {
      const component = shallow(<Input onChange={noop} disabled={true} hasFeedbackIcon={true} type='radio'/>);
      expect(component.find('input').prop('type')).to.contain('radio');
      expect(component.find('input').prop('disabled')).to.equal(true);
    });

    it('Radio button sends value onClick', function() {
      let value;
      const onChange = function(newValue) {
        value = newValue;
      };

      let component = shallow(<Input onChange={onChange} value='Hello world' type='radio'/>);
      component.find('input').simulate('click');
      expect(value).to.equal('Hello world');
    });

    it('Radio button check if defaultChecked is set', function() {
      let component = shallow(<Input onChange={noop} value='value1' defaultChecked={true} type='radio'/>);
      let value = component.find('input');
      expect(value.prop('defaultChecked')).to.be.true;
    });

    it('Is addonLeft rendering text', function() {
      const component = shallow(<Input onChange={noop} addonLeft='testing left' onValidate={() => true} type='text'/>);
      expect(component.find('span').hasClass('input-group-addon input-group-addon-primary addon-left')).to.equal(true);
      expect(component.find('span.addon-left').text()).to.equal('testing left');
    });

    it('Is addonRight rendering text', function() {
      const component = shallow(<Input onChange={noop} addonRight='testing right' onValidate={() => true} type='text'/>);
      expect(component.find('span').hasClass('input-group-addon input-group-addon-primary addon-right')).to.equal(true);
      expect(component.find('span.addon-right').text()).to.equal('testing right');
    });

    it('Is addonLeft rendering an element', function() {
      const icon = <i className='fa fa-check' />;
      const component = shallow(<Input onChange={noop} addonLeft={icon} type='text'/>);
      expect(component.find('span').containsMatchingElement(icon)).to.equal(true);
    });

    it('Is addonRight rendering an element', function() {
      const icon = <i className='fa fa-check' />;
      const component = shallow(<Input onChange={noop} addonRight={icon} type='text'/>);
      expect(component.find('span').containsMatchingElement(icon)).to.equal(true);
    });

    it('Shows success state', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => true} />);
      expect(component.find('div.form-group').hasClass('has-success')).to.equal(true);
      expect(component.find('i.fa-check-circle').length).to.equal(1);
    });

    it('Shows success state without icon', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => true} hasFeedbackIcon={false} />);
      expect(component.find('div.form-group').hasClass('has-success')).to.equal(true);
      expect(component.find('i').length).to.equal(0);
    });

    it('Shows fail state', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => false} />);
      expect(component.find('div.form-group').hasClass('has-error')).to.equal(true);
      expect(component.find('i.fa-times-circle').length).to.equal(1);
    });

    it('Shows warning state', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => 'warning'} />);
      expect(component.find('div.form-group').hasClass('has-warning')).to.equal(true);
      expect(component.find('i.fa-exclamation-triangle').length).to.equal(1);
    });

    it('Shows addon Right', function() {
      const component = shallow(<Input onChange={noop} addonRight='testing right' onValidate={() => true} />);
      expect(component.find('span').hasClass('input-group-addon input-group-addon-primary addon-right')).to.equal(true);
      expect(component.find('span.addon-right').text()).to.equal('testing right');
    });

    it('Shows addon Left', function() {
      const component = shallow(<Input onChange={noop} addonLeft='testing left' onValidate={() => true} />);
      expect(component.find('span').hasClass('input-group-addon input-group-addon-primary addon-left')).to.equal(true);
      expect(component.find('span.addon-left').text()).to.equal('testing left');
    });

    it('Has an id/key');
  // Key is not a standard prop, cannot access for testing (https://fb.me/react-special-props)

    it('onValidate is called', function() {
      const onClick = sinon.spy();
      const component = shallow(<Input onChange={noop} onValidate={onClick} />);
      component.find('input').simulate('click');
      expect(onClick.calledOnce).to.equal(true);
    });

    it('onKeyDown is called', function() {
      const onKeyDown = sinon.spy();
      const component = shallow(<Input onChange={noop} onKeyDown={onKeyDown} />);
      component.find('input').simulate('keyDown');
      expect(onKeyDown.calledOnce).to.equal(true);
    });

    it('It has a value of number', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => true} hasFeedback={true} value={2}/>);
      expect(component.find('input').prop('value')).to.equal(2);
    });

    it('Has a value of string', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => true} hasFeedback={true} value='testing value'/>);
      expect(component.find('input').prop('value')).to.equal('testing value');
    });

    it('Has a value of true', function() {
      const component = shallow(<Input onChange={noop} onValidate={() => true} hasFeedback={true} value={true}/>);
      expect(component.find('input').prop('value')).to.equal(true);
    });

    it('onValidate is called when value is changed', function() {
      const onValidate = sinon.spy();
      const component = shallow(<Input onChange={onValidate} />);
      component.find('input').simulate('change');
      expect(onValidate.calledOnce).to.equal(true);
    });
  });
});
