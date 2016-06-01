import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import { Page, Button } from '../src';

describe('<Page/>', function() {
  it('Page has title', function() {
    const component = shallow(<Page title='text'/>);
    expect(component.find('h1').hasClass('al-title')).to.equal(true);
  });

  it('Page does not have title', function() {
    const component = shallow(<Page/>);
    expect(component.find('h1')).to.have.length(0);
  });

  it('Title text is being rendered', function() {
    const component = shallow(<Page title='Testing text'/>);
    expect(component.find('h1').text()).to.equal('Testing text');
  });

  it('Action bar renders text', function() {
    const component = shallow(<Page actionBar='Testing text'/>);
    expect(component.containsMatchingElement('Testing text')).to.equal(true);
  });

  it('Action bar renders elements', function() {
    const button = <Button />;
    const component = shallow(<Page actionBar={button}/>);
    expect(component.containsMatchingElement(button)).to.equal(true);
  });

  it('Renders children', function() {
    const component = shallow(<Page/>);
    expect(component.children()).to.have.length(1);
  });
});
