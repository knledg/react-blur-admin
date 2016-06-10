import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import { Breadcrumbs } from '../src';

describe('<Breadcrumb />', function() {
  it('Has default classes', function() {
    const component = shallow(<Breadcrumbs />);
    expect(component.find('ul').hasClass('breadcrumb al-breadcrumb')).to.equal(true);
  });
  it('Renders className', function() {
    const component = shallow(<Breadcrumbs className='testing className'/>);
    expect(component.find('ul').hasClass('breadcrumb al-breadcrumb')).text().to.contain('testing className');
  });
});
