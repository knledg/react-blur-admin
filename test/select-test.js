import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';

import { Select } from '../src';

describe('<Select/>', function() {
  const options =
    [
      {value: 'one'},
      {value: 'two'},
      {value: 'three'},
    ];
  const component = mount(<Select placeholder='placeholder'isSearchable={true} options={options}/>);
  it('has an outermost div with form-group class', function() {
    expect(component.find('div.form-group')).to.have.length(1);
  });
  it('has a div with btn-group class', function() {
    expect(component.find('div.btn-group')).to.have.length(1);
  });
  it('contains a button', function() {
    expect(component.find('button')).to.have.length(1);
  });
  it('contains a span with bs-caret class', function() {
    expect(component.find('span.bs-caret')).to.have.length(1);
  });
  it('contains a span with caret class', function() {
    expect(component.find('span.caret')).to.have.length(1);
  });
  it('contains a div with dropdown-menu class', function() {
    expect(component.find('div.dropdown-menu')).to.have.length(1);
  });
  it('contains a ul with dropdown-menu class', function() {
    expect(component.find('ul.dropdown-menu')).to.have.length(1);
  });
  it('has a placeholder', function() {
    expect(component.find('span.filter-option').text()).to.contain('placeholder');
  });
  it('renders options', function() {
    expect(component.find('ul.dropdown-menu li')).to.have.length(3);
  });
  it('contains isSearchable', function() {
    expect(component.find('div.bs-searchbox')).to.have.length(1);
  });
  it('is searchable is false, searchbox is not rendered ', function() {
    const newComponent = mount(<Select placeholder='placeholder' isSearchable={false}/>);
    expect(newComponent.find('div.bs-searchbox')).to.have.length(0);
  });
  it('has no options', function() {
    const newComponent = mount(<Select placeholder='placeholder' isSearchable={false}/>);
    expect(newComponent.find('ul-dropdown-menu li')).to.have.length(0);
  });
});
