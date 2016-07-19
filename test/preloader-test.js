import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';

import { Preloader } from '../src';

describe('<Preloader />', function() {
  describe('Has default props', function() {
    const component = mount(<Preloader />);

    it('Contains preloader container', function() {
      expect(component.find('div').at(0).hasClass('preloader-component-container')).to.equal(true);
    });

    it('Contains preloader component', function() {
      expect(component.find('div').at(1).hasClass('preloader-component')).to.equal(true);
    });
  });
});
