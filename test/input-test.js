import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {noop} from 'lodash';

import { Input } from '../src';

describe('<Input/>', function() {
  it('Has default props');
  it('Type is success', function() {
    const component = shallow(<Input onChange={noop} validationResult={true} type='success'/>);
    expect(component.find('input').hasClass('success')).to.equal(true);
  });

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
