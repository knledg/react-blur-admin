import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import { noop } from 'lodash';

import { Switch } from '../src';

describe('<Switch/>', function() {
  describe('With default properties', function() {
    const component = shallow(<Switch onChange={noop}/>);
    it('Should have a primary color', function() {
      expect(component.find('div.switch-container').hasClass('primary')).to.equal(true);
    });
    it('Is ON by default', function() {
      expect(component.find('.bootstrap-switch-handle-on').length).to.equal(1);
      expect(component.find('.bootstrap-switch-handle-off').length).to.equal(0);
    });
  });

  it('Switch is primary color', function() {
    const component = shallow(<Switch onChange={noop} type='primary'/>);
    expect(component.find('div.switch-container').hasClass('primary')).to.equal(true);
  });

  it('Switch is warning color ', function() {
    const component = shallow(<Switch onChange={noop} type='warning'/>);
    expect(component.find('div.switch-container').hasClass('warning')).to.equal(true);
  });

  it('Switch is success color', function() {
    const component = shallow(<Switch onChange={noop} type='success'/>);
    expect(component.find('div.switch-container').hasClass('success')).to.equal(true);
  });

  it('Switch is remove color ', function() {
    const component = shallow(<Switch onChange={noop} type='danger'/>);
    expect(component.find('div.switch-container').hasClass('danger')).to.equal(true);
  });

  it('Switch is info color', function() {
    const component = shallow(<Switch onChange={noop} type='info'/>);
    expect(component.find('div.switch-container').hasClass('info')).to.equal(true);
  });

  it('Switch has className', function() {
    const component = shallow(<Switch onChange={noop} className='test'/>);
    expect(component.find('div.switch-container').hasClass('test')).to.equal(true);
  });

  it('Switch is on', function() {
    const component = shallow(<Switch isOn={true} onChange={noop}/>);
    expect(component.find('.bootstrap-switch-handle-on').length).to.equal(1);
    expect(component.find('.bootstrap-switch-handle-off').length).to.equal(0);
  });

  it('Switch is off', function() {
    const component = shallow(<Switch isOn={false} onChange={noop} />);
    expect(component.find('.bootstrap-switch-handle-on').length).to.equal(0);
    expect(component.find('.bootstrap-switch-handle-off').length).to.equal(1);
  });

  it('Has an onClick change', function() {
    const onClick = sinon.spy();
    const component = shallow(<Switch onChange={onClick}/>);
    component.find('div.switch-container').simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });
});
