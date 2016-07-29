import React from 'react';
import sinon from 'sinon';
import {noop} from 'lodash';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import { Textarea, Button } from '../src';

describe('<Textarea/>', function() {
  it('Has a name', function() {
    const component = shallow(<Textarea onChange={noop} name='Testing name'/>);
    expect(component.find('textarea').prop('name')).to.equal('Testing name');
  });

  it('Has a label', function() {
    const component = shallow(<Textarea onChange={noop} label='Testing label'/>);
    expect(component.find('label').text()).to.contain('Testing label');
  });

  it('Has a className', function() {
    const component = shallow(<Textarea onChange={noop} className='Testing className'/>);
    expect(component.find('textarea').hasClass('form-control')).to.equal(true);
  });

  it('Has a placeHolder', function() {
    const component = shallow(<Textarea onChange={noop} placeholder='Testing placeholder'/>);
    expect(component.find('textarea').prop('placeholder')).to.equal('Testing placeholder');
  });

  it('Is disabled', function() {
    const component = shallow(<Textarea onChange={noop} disabled={true}/>);
    expect(component.find('textarea').prop('disabled')).to.equal(true);
  });

  it('Is not disabled', function() {
    const component = shallow(<Textarea onChange={noop} disabled={false}/>);
    expect(component.find('textarea').prop('disabled')).to.equal(false);
  });

  it('Value renders elements', function() {
    const button = <Button />;
    const component = shallow(<Textarea onChange={noop} value={button}/>);
    expect(component.find('textarea').prop('value')).to.equal((button));
  });

  it('Value renders text', function() {
    const component = shallow(<Textarea onChange={noop} value='Testing text'/>);
    expect(component.find('textarea').prop('value')).to.equal('Testing text');
  });

  it('onChange is called when value is changed', function() {
    const onChange = sinon.spy();
    const component = shallow(<Textarea onChange={onChange} />);
    component.find('textarea').simulate('change');
    expect(onChange.calledOnce).to.equal(true);
  });
});
