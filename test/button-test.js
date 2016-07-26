/* eslint-disable no-console */

import React from 'react';
import sinon from 'sinon';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import { Button } from '../src';

require('mocha-sinon');

describe('<Button />', function() {
  describe('Without type property', function() {
    const component = shallow(<Button />);
    it('Has default class', function() {
      expect(component.find('button').hasClass('btn-default')).to.equal(true);
    });
    it('Should not have an icon', function() {
      expect(component.find('i')).to.have.length(0);
    });
  });

  it('Icon renders string', function() {
    const component = shallow(<Button icon='fa fa-plus' />);
    expect(component.find('i').hasClass('fa fa-plus')).to.equal(true);
  });

  it('Custom icon is rendered', function() {
    const icon = <div className='testing'/>;
    const component = shallow(<Button icon={icon} />);
    expect(component.find('div').hasClass('testing')).to.equal(true);
  });

  describe('Primary', function() {
    const component = shallow(<Button type='primary'/>);
    it('Should have primary class', function() {
      expect(component.find('button').hasClass('btn-primary')).to.equal(true);
    });
  });

  describe('Danger', function() {
    const component = shallow(<Button type='danger'/>);
    it('Should have danger class', function() {
      expect(component.find('button').hasClass('btn-danger')).to.equal(true);
    });
    it('Should have a minus icon', function() {
      expect(component.find('i').hasClass('fa fa-minus')).to.equal(true);
    });
  });

  describe('Warning', function() {
    const component = shallow(<Button type='warning'/>);
    it('Should have warning class', function() {
      expect(component.find('button').hasClass('btn-warning')).to.equal(true);
    });
    it('Should have a exclamation circle icon', function() {
      expect(component.find('i').hasClass('fa fa-exclamation-circle')).to.equal(true);
    });
    it('Should have a default text of Warning', function() {
      expect(component.find('button').text('title')).to.contain('Warning');
    });
  });

  describe('Info', function() {
    const component = shallow(<Button type='info'/>);
    it('Should have info class', function() {
      expect(component.find('button').hasClass('btn-info')).to.equal(true);
    });
    it('Should have an info circle icon', function() {
      expect(component.find('i').hasClass('fa fa-info-circle')).to.equal(true);
    });
    it('Should have a default text of Info', function() {
      expect(component.find('button').text('title')).to.contain('Info');
    });
  });

  describe('Success', function() {
    const component = shallow(<Button type='success'/>);
    it('Should have success class', function() {
      expect(component.find('button').hasClass('btn-success')).to.equal(true);
    });
    it('Should have a check icon', function() {
      expect(component.find('i').hasClass('fa fa-check')).to.equal(true);
    });
    it('Should have a default text of Success', function() {
      expect(component.find('button').text('title')).to.contain('Success');
    });
  });

  describe('Add', function() {
    const component = shallow(<Button title='Add' type='add'/>);

    it('Should have success class', function() {
      expect(component.find('button').hasClass('btn-primary')).to.equal(true);
    });

    it('Should have a check icon', function() {
      expect(component.find('i').hasClass('fa fa-plus')).to.equal(true);
    });
    it('Should have a default text of add', function() {
      expect(component.find('button').text('title')).to.contain('Add');
    });
  });

  describe('Remove', function() {
    const component = shallow(<Button type='remove'/>);

    it('Should have remove class', function() {
      expect(component.find('button').hasClass('btn-danger')).to.equal(true);
    });

    it('Should have a minus icon', function() {
      expect(component.find('i').hasClass('fa fa-minus')).to.equal(true);
    });
    it('Should have a default text of Remove', function() {
      expect(component.find('button').text('title')).to.contain('Remove');
    });
  });

  describe('Default', function() {
    const component = shallow(<Button type='default'/>);
    it('Should have default class', function() {
      expect(component.find('button').hasClass('btn-default')).to.equal(true);
    });
    it('Should have no icon', function() {
      expect(component.find('i')).to.have.length(0);
    });
    it('Should have a default text of Default', function() {
      expect(component.find('button').text('title')).to.contain('Default');
    });
  });

  it('Should be a disabled button', function() {
    const component = shallow(<Button disabled={true}/>);
    expect(component.find('button').prop('disabled')).to.equal(true);
  });

  it('Button should not be disabled', function() {
    const component = shallow(<Button disabled={false}/>);
    expect(component.find('button').prop('disabled')).to.equal(false);
  });

  it('Button should not be disabled by default', function() {
    const component = shallow(<Button/>);
    expect(component.find('button').prop('disabled')).to.equal(false);
  });

  it('Button size should be extra small', function() {
    const component = shallow(<Button size='xs'/>);
    expect(component.find('button').hasClass('btn-xs')).to.equal(true);
  });

  it('Button size should be small', function() {
    const component = shallow(<Button size='sm'/>);
    expect(component.find('button').hasClass('btn-sm')).to.equal(true);
  });

  it('Button size should be mini medium', function() {
    const component = shallow(<Button size='mm'/>);
    expect(component.find('button').hasClass('btn-mm')).to.equal(true);
  });

  it('Button size should be medium', function() {
    const component = shallow(<Button size='md'/>);
    expect(component.find('button').hasClass('btn-md')).to.equal(true);
  });

  it('Button size should be extra medium', function() {
    const component = shallow(<Button size='xm'/>);
    expect(component.find('button').hasClass('btn-xm')).to.equal(true);
  });

  it('Button size should be large', function() {
    const component = shallow(<Button size='lg'/>);
    expect(component.find('button').hasClass('btn-lg')).to.equal(true);
  });

  before(function() {
    sinon.stub(console, 'error', (warning) => { throw new Error(warning); });
  });

  it('Should throw proptype error with invalid size property', function() {
    expect(function() { shallow(<Button size='invalid' />); }).to.throw(/Invalid prop `size` of value/);
  });

  after(function() {
    console.error.restore();
  });

  it('Should be clickable', function() {
    const onClick = sinon.spy();
    const component = shallow(<Button onClick={onClick}/>);
    component.find('button').simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });
});
