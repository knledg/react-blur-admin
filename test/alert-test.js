/* eslint-disable no-console */

import React from 'react';
import sinon from 'sinon';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import { Alert } from '../src';

describe('<Alert />', function() {
  describe('Has default props', function() {
    const component = shallow(<Alert />);
    it('Has type of success', function() {
      expect(component.find('div').hasClass('alert bg-success')).to.equal(true);
    });
  });

  it('Has a top div to pass in className', function() {
    const component = shallow(<Alert className='classname' />);
    expect(component.find('div.alert').hasClass('classname')).to.equal(true);
  });

  it('Has type of warning', function() {
    const component = shallow(<Alert type='warning' />);
    expect(component.find('div').hasClass('alert bg-warning')).to.equal(true);
  });
  it('Has type of info', function() {
    const component = shallow(<Alert type='info' />);
    expect(component.find('div').hasClass('alert bg-info')).to.equal(true);
  });
  it('Has type of danger', function() {
    const component = shallow(<Alert type='danger' />);
    expect(component.find('div').hasClass('alert bg-danger')).to.equal(true);
  });
  it('Has type of remove', function() {
    const component = shallow(<Alert type='remove'/>);
    expect(component.find('div').hasClass('alert bg-danger')).to.equal(true);
  });
  it('Has a close button', function() {
    const component = shallow(<Alert isDismissible={true}/>);
    expect(component.find('button').hasClass('toast-close-button')).to.equal(true);
  });

  it('Is dismissible', function() {
    const component = shallow(<Alert isDismissible={true}/>);
    expect(component.find('div').hasClass('closable')).to.equal(true);
  });

  it('Has an onClose change', function() {
    const onClick = sinon.spy();
    const component = shallow(<Alert onClose={onClick} isDismissible={true} />);
    component.find('button').simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });

  before(function() {
    sinon.stub(console, 'error', (warning) => {throw new Error(warning);});
  });

  it('Should throw proptype error with invalid type property', function() {
    expect(function() { shallow(<Alert type='invalid' />); }).to.throw(/Unknown Alert Type/);
  });

  after(function() {
    console.error.restore();
  });
});
