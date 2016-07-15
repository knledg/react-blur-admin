import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';

import { Preloader } from '../src';

describe('<Preloader />', function() {
  describe('Has default props', function() {
    const component = mount(<Preloader />);

    it('Contains preloader container', function() {
      expect(component.ref('container').hasClass('preloader-component-container')).to.equal(true);
    });

    it('Contains preloader component', function() {
      expect(component.ref('component').hasClass('preloader-component')).to.equal(true);
    });
  });
});
