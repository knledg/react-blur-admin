import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import { Panel } from '../src';

describe('<Panel/>', function() {
  describe('With default properties', function() {
    const component = shallow(<Panel size='auto'/>);
    it('Should have a default size of auto', function() {
      expect(component.find('div.panel').hasClass('')).to.equal(true);
    });
    it('Should not have scroll', function() {
      expect(component.find('div.panel').hasClass('with-scroll')).to.equal(false);
    });
  });

  it('Panel is extra-small', function() {
    const component = shallow(<Panel size='xs'/>);
    expect(component.find('div.panel').hasClass('xsmall-panel')).to.equal(true);
  });

  it('Panel is extra-small', function() {
    const component = shallow(<Panel size='extra-small'/>);
    expect(component.find('div.panel').hasClass('xsmall-panel')).to.equal(true);
  });

  it('Panel is small', function() {
    const component = shallow(<Panel size='sm'/>);
    expect(component.find('div.panel').hasClass('small-panel')).to.equal(true);
  });

  it('Panel is small', function() {
    const component = shallow(<Panel size='small'/>);
    expect(component.find('div.panel').hasClass('small-panel')).to.equal(true);
  });

  it('Panel is medium', function() {
    const component = shallow(<Panel size='md'/>);
    expect(component.find('div.panel').hasClass('medium-panel')).to.equal(true);
  });

  it('Panel is medium', function() {
    const component = shallow(<Panel size='medium'/>);
    expect(component.find('div.panel').hasClass('medium-panel')).to.equal(true);
  });

  it('Panel is large', function() {
    const component = shallow(<Panel size='lg'/>);
    expect(component.find('div.panel').hasClass('large-panel')).to.equal(true);
  });

  it('Panel is large', function() {
    const component = shallow(<Panel size='large'/>);
    expect(component.find('div.panel').hasClass('large-panel')).to.equal(true);
  });

  it('Panel is auto sized', function() {
    const component = shallow(<Panel size='auto'/>);
    expect(component.find('div.panel').hasClass('')).to.equal(true);
  });

  it('Panel is auto sized', function() {
    const component = shallow(<Panel size='none'/>);
    expect(component.find('div.panel').hasClass('')).to.equal(true);
  });

  it('Panel has scroll feature', function() {
    const component = shallow(<Panel withScroll={true}/>);
    expect(component.find('div.panel').hasClass('with-scroll')).to.equal(true);
  });

  it('Panel does not have scroll feature', function() {
    const component = shallow(<Panel withScroll={false}/>);
    expect(component.find('div.panel').hasClass('with-scroll')).to.equal(false);
  });

  it('Panel has className', function() {
    const component = shallow(<Panel className='test'/>);
    expect(component.find('div.panel').hasClass('test')).to.equal(true);
  });

  it('Panel has title', function() {
    const component = shallow(<Panel title='title'/>);
    expect(component.find('h3').text()).to.contain('title');
  });

  it('Panel does not have title', function() {
    const component = shallow(<Panel title=''/>);
    expect(component.find('h3').length).to.equal(0);
  });
});
