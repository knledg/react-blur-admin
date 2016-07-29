/* eslint-disable no-console */

import React from 'react';
import sinon from 'sinon';
import {noop} from 'lodash';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import { Modal } from '../src';

describe('<Modal/>', function() {
  describe('With default properties', function() {
    const component = shallow(<Modal onClose={noop}/>);
    it('Should have a size of medium', function() {
      expect(component.find('div.modal').hasClass('medium-panel')).to.equal(true);
    });
    it('Should have a type of success', function() {
      expect(component.find('div.modal-header').hasClass('bg-success')).to.equal(true);
    });
    it('isOpen is false', function() {
      expect(component.find('div.modal').hasClass('modal-open in')).to.equal(false);
    });
    it('Modal does not have an icon', function() {
      expect(component.find('i')).to.have.length(0);
    });
  });

  it('Should have success class', function() {
    const component = shallow(<Modal onClose={noop} type='success'/>);
    expect(component.find('div.modal-header').hasClass('bg-success')).to.equal(true);
  });

  it('Should have danger class', function() {
    const component = shallow(<Modal onClose={noop} type='danger'/>);
    expect(component.find('div.modal-header').hasClass('bg-danger')).to.equal(true);
  });

  it('Should have info class', function() {
    const component = shallow(<Modal onClose={noop} type='info'/>);
    expect(component.find('div.modal-header').hasClass('bg-info')).to.equal(true);
  });

  it('Should have warning class', function() {
    const component = shallow(<Modal onClose={noop} type='warning'/>);
    expect(component.find('div.modal-header').hasClass('bg-warning')).to.equal(true);
  });

  it('Modal size should be extra small', function() {
    const component = shallow(<Modal onClose={noop} size='xs'/>);
    expect(component.find('div.modal').hasClass('xsmall-panel')).to.equal(true);
  });

  it('Modal size should be extra small', function() {
    const component = shallow(<Modal onClose={noop} size='extra-small'/>);
    expect(component.find('div.modal').hasClass('xsmall-panel')).to.equal(true);
  });

  it('Modal size should be small', function() {
    const component = shallow(<Modal onClose={noop} size='sm'/>);
    expect(component.find('div.modal').hasClass('small-panel')).to.equal(true);
  });

  it('Modal size should be small', function() {
    const component = shallow(<Modal onClose={noop} size='small'/>);
    expect(component.find('div.modal').hasClass('small-panel')).to.equal(true);
  });

  it('Modal size should be medium', function() {
    const component = shallow(<Modal onClose={noop} size='md'/>);
    expect(component.find('div.modal').hasClass('medium-panel')).to.equal(true);
  });

  it('Modal size should be medium', function() {
    const component = shallow(<Modal onClose={noop} size='medium'/>);
    expect(component.find('div.modal').hasClass('medium-panel')).to.equal(true);
  });

  it('Modal size should be large', function() {
    const component = shallow(<Modal onClose={noop} size='lg'/>);
    expect(component.find('div.modal').hasClass('large-panel')).to.equal(true);
  });

  it('Modal size should be large', function() {
    const component = shallow(<Modal onClose={noop} size='large'/>);
    expect(component.find('div.modal').hasClass('large-panel')).to.equal(true);
  });

  it('Modal has an icon', function() {
    const component = shallow(<Modal onClose={noop} icon='fa-fa-plus' />);
    expect(component.find('i').hasClass('fa-fa-plus')).to.equal(true);
  });

  it('Modal should have title', function() {
    const component = shallow(<Modal onClose={noop} title='Testing title'/>);
    expect(component.find('div.modal-header').text()).to.contain('Testing title');
  });

  it('Modal does not have a title', function() {
    const component = shallow(<Modal onClose={noop} size='none'/>);
    expect(component.find('div.modal-header').text()).to.equal(' ');
  });

  it('Modal has a className', function() {
    const component = shallow(<Modal onClose={noop} className='Testing className'/>);
    expect(component.find('div.modal').hasClass('Testing className')).to.equal(true);
  });

  it('Modal should align right', function() {
    const component = shallow(<Modal onClose={noop} align='right'/>);
    expect(component.find('div.modal-body').hasClass('text-right')).to.equal(true);
  });

  it('Modal should align center', function() {
    const component = shallow(<Modal onClose={noop} align='center'/>);
    expect(component.find('div.modal-body').hasClass('text-center')).to.equal(true);
  });

  it('Modal isOpen is true', function() {
    const component = shallow(<Modal onClose={noop} isOpen={true}/>);
    expect(component.find('div.modal').hasClass('modal-open in')).to.equal(true);
  });

  it('Modal isOpen is false', function() {
    const component = shallow(<Modal onClose={noop} isOpen={false}/>);
    expect(component.find('div.modal').hasClass('modal-open in')).to.equal(false);
  });

  it('Has an onClose change', function() {
    const onClick = sinon.spy();
    const component = shallow(<Modal onClose={onClick} />);
    component.find('div.modal-footer Button').simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });

  before(function() {
    sinon.stub(console, 'error', (warning) => {throw new Error(warning);});
  });

  it('Should throw proptype error with invalid type property', function() {
    expect(function() { shallow(<Modal onClose={noop} type='invalid' />);}).to.throw(/Unknown Modal Type/);
  });

  after(function() {
    console.error.restore();
  });
});
