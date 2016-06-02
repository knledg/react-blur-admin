import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {noop} from 'lodash';

import { Notification } from '../src';

describe('<Notification/>', function() {
  it('Notification has title', function() {
    const component = shallow(<Notification onClose={noop} title='text'/>);
    expect(component.find('div.toast-title').hasClass('toast-title')).to.equal(true);
  });
  it('Title text is being rendered', function() {
    const component = shallow(<Notification onClose={noop} title='Testing text'/>);
    expect(component.find('div.toast-title').text()).to.equal('Testing text');
  });
  it('Type is success', function() {
    const component = shallow(<Notification onClose={noop} type='success'/>);
    expect(component.find('div.toast').hasClass('toast-success')).to.equal(true);
  });
  it('Type is warning', function() {
    const component = shallow(<Notification onClose={noop} type='warning'/>);
    expect(component.find('div.toast').hasClass('toast-warning')).to.equal(true);
  });
  it('Type is error', function() {
    const component = shallow(<Notification onClose={noop} type='error'/>);
    expect(component.find('div.toast').hasClass('toast-error')).to.equal(true);
  });
  it('Type is info', function() {
    const component = shallow(<Notification onClose={noop} type='info'/>);
    expect(component.find('div.toast').hasClass('toast-info')).to.equal(true);
  });

  // it('Timeout is rendered', function() {
  //   const component = shallow(<Notification onClose={noop} type='info'/>);
  //   expect(component.find('div.toast').hasClass('toast-info')).to.equal(true);
  // });
  it('Extended timeout is rendered');
  it('Has a close button', function() {
    const component = shallow(<Notification onClose={noop} closeButton={true}/>);
    expect(component.find('button').hasClass('toast-close-button')).to.equal(true);
  });
  // it('Does not have a close button', function() {
  //   const component = shallow(<Notification onClose={noop} closeButton={false}/>);
  //   expect(component.find('button').hasClass('toast-close-button')).to.equal(false);
  // });
  // it('Has tap to dismiss function', function() {
  //   const component = shallow(<Notification onClose={noop} tapToDismiss={true} closeButton={true}/>);
  //   expect(component.find('div.toast').prop('onClick')).to.equal(true);
  // });

  it('OnClose is called when a click is made', function() {
    const onClick = sinon.spy();
    const component = shallow(<Notification onClose={onClick} />);
    component.find('div.toast').simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });
  // it('Tap to dismiss is called when a click is made', function() {
  //   const onClick = sinon.spy();
  //   const component = shallow(<Notification tapToDismiss={true} onClose={onClick} />);
  //   component.find('div.toast').simulate('click');
  //   expect(onClick.calledOnce).to.equal(true);
  // });
  it('Body renders children components');
});
