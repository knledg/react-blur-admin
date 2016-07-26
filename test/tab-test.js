import React from 'react';
import sinon from 'sinon';
import {expect} from 'chai';
import {mount} from 'enzyme';
import {noop} from 'lodash';

import { Tab } from '../src';

describe('<Tab/>', function() {
  const component = mount(<Tab title='this is a title' onClick={noop}/>);
  it('renders an a tag', function() {
    expect(component.find('a')).to.have.length(1);
  });
  it('can pass in a title', function() {
    expect(component.find('a').text()).to.contain('this is a title');
  });
});
it('Has an onClick change', function() {
  const onClick = sinon.spy();
  const component = mount(<Tab onClick={onClick}/>);
  component.find('a').simulate('click');
  expect(onClick.calledOnce).to.equal(true);
});
