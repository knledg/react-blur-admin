import _ from 'lodash';
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import { Breadcrumbs } from '../src';

describe('<Breadcrumb />', function() {
  it('Has default classes', function() {
    const component = shallow(<Breadcrumbs />);
    expect(component.find('ul').hasClass('breadcrumb al-breadcrumb')).to.equal(true);
  });
  it('className is being rendered', function() {
    const component = shallow(<Breadcrumbs className='testing className'/>);
    expect(component.find('ul').hasClass('testing className')).to.equal(true);
  });
});

it('Renders li child components', function() {
  const component = shallow(<Breadcrumbs>{_.map(_.range(0, 5), (num) => `Child ${num}`)}</Breadcrumbs>);
  expect(component.find('li')).to.have.length(5);
});
