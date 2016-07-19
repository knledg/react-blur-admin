import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';

import { Preloader } from '../src';

describe('<Preloader />', function() {
  const component = mount(<Preloader />);

  it('Contains preloader container', function() {
    expect(component.find('div.preloader-component-container').length).to.equal(1);
  });

  it('Contains preloader component', function() {
    expect(component.find('div.preloader-component').length).to.equal(1);
  });

  it('Has a third nested div', function() {
    expect(component.find('div div div').length).to.equal(3);
  });
});
