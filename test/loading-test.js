import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import { Loading } from '../src';

describe('<Loading/>', function() {
  it('Has class fa fa-spinner fa-spin', function() {
    const component = shallow(<Loading/>);
    expect(component.find('i').hasClass('fa fa-spinner fa-spin')).to.equal(true);
  });
});
