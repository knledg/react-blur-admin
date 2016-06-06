import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {noop} from 'lodash';

import { Input } from '../src';

describe('<Input/>', function() {
  it('Has default props');
  it('Is a text type', function() {
    const component = shallow(<Input onChange={noop} onValidate={() => true} type='text'/>);
    expect(component.find('input').hasClass('form-control')).to.equal(true);
  });

  it('Is has feedback', function() {
    const component = shallow(<Input onChange={noop} onValidate={() => true} hasFeedback={true} type='text'/>);
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

 it('Is addonLeft rendering icons', function() {
    const icon = <i className='fa fa-check' />;
    const component = shallow(<Input onChange={noop} addonLeft={<i className='fa fa-check' />} validationResult={true} type='text'/>);
    expect(component.find('span').containsMatchingElement(icon)).to.equal(true);
  });

 it('Is addonRight rendering icons', function() {
    const icon = <i className='fa fa-check' />;
    const component = shallow(<Input onChange={noop} addonRight={<i className='fa fa-check' />} validationResult={true} type='text'/>);
    expect(component.find('span').containsMatchingElement(icon)).to.equal(true);
  });

it('Shows success state', function() {
    const component = shallow(<Input onChange={noop} onValidate={() => true} />);
    expect(component.find('div.form-group').hasClass('has-success')).to.equal(true);
    expect(component.find('i.ion-checkmark-circled').length).to.equal(1);
  });

it('Shows success state without icon', function() {
    const component = shallow(<Input onChange={noop} onValidate={() => true} hasFeedbackIcon={false} />);
    expect(component.find('div.form-group').hasClass('has-success')).to.equal(true);
    expect(component.find('i').length).to.equal(0)
  });

it('Shows fail state', function() {
    const component = shallow(<Input onChange={noop} onValidate={() => false} />);
    expect(component.find('div.form-group').hasClass('has-error')).to.equal(true);
    expect(component.find('i.ion-android-cancel').length).to.equal(1);
  });

it('Shows warning state', function() {
    const component = shallow(<Input onChange={noop} onValidate={() => 'warning'} />);
    expect(component.find('div.form-group').hasClass('has-warning')).to.equal(true);
    expect(component.find('i.ion-alert-circled').length).to.equal(1);
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

// it('Renders input wrapper', function() {
//     const component = shallow(<Input onChange={noop} addonLeft='testing left' onValidate={() => true} />);
//     expect(component.find('div.input-group').hasClass('testing left')).to.equal(true);
//   });



  // it('Classes are rendered', function() {
  //   const component = shallow(<Input onChange={noop} className='test' validationResult={true} type='text'/>);
  //   expect(component.find('input').hasClass('test')).to.equal(true);
  // });

  // it('Type is error', function() {
  //   const component = shallow(<Input onChange={noop} type='error'/>);
  //   expect(component.find('div.form-group').hasClass('error')).to.equal(true);
  // });

  // it('Type is warning', function() {
  //   const component = shallow(<Input onChange={noop} type='warning'/>);
  //   expect(component.find('div.form-group').hasClass('warning')).to.equal(true);
  // });

  // it('Input has ID');
  // const component = shallow(<Input onChange={noop} type='warning'/>);
  //   expect(component.find('input.radio').text()).to.contain('warning');
  // });

  // it('Input has name', function() {
  //   const component = shallow(<Input onChange={noop} name='Testing name'/>);
  //   expect(component.find('label').text()).to.contain('Testing name');
  // });

  it('Input className');

  it('Input placeholder');

  it('Input helpLabel');

  it('Input addonLeft');

  it('Input addonRight');

  it('Input hasFeedback');

  it('Input does not have hasFeedback');

  it('Input has autofocus');

  it('Input does not have autofocus');

  it('Input has FeebackIcon');

  it('Input does not have Feedback icon');

  it('Input onValidate');

  it('Input onKeyDown');

  it('Input value');

  it('Input onChange');

  it('Input disabled');

  it('Input is not disabled');

  it('Input is rounded');

  it('Input is not rounded');
});
