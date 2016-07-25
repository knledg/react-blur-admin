import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import { noop } from 'lodash';

import { NotificationsAlert } from '../src';

describe('<NotificationsAlert/>', function() {
  const component = mount(<NotificationsAlert markAllAsReadOnClick={noop} allNotificationsOnClick={noop} settingsOnClick={noop} notificationCount={3}/>);
  it('Has a outermost ul', function() {
    expect(component.find('ul').length).to.equal(1);
  });
  it('contains one li', function() {
    expect(component.find('li').length).to.equal(1);
  });
  it('has an a tag with dropdown toggle', function() {
    expect(component.find('a.dropdown-toggle').length).to.equal(1);
  });
  it('has a bell icon', function() {
    expect(component.find('i').at(0).hasClass('fa-bell-o')).to.equal(true);
  });
  it('has a span', function() {
    expect(component.find('span').length).to.equal(1);
  });
  it('has a div with notification ring class', function() {
    expect(component.find('div.notification-ring').length).to.equal(1);
  });
  it('has an i with dropdown-arr class', function() {
    expect(component.find('i').at(1).hasClass('dropdown-arr')).to.equal(true);
  });
  it('has a div with header clearfix class', function() {
    expect(component.find('div.header').hasClass('clearfix')).to.equal(true);
  });
  it('has a text of Notifications', function() {
    expect(component.find('strong').text()).to.equal('Notifications');
  });
  it('has a text of Mark All as Read', function() {
    expect(component.find('a').at(1).text()).to.equal('Mark All as Read');
  });
  it('has a text of Settings', function() {
    expect(component.find('a').at(2).text()).to.equal('Settings');
  });
  it('has a text of See all notifications', function() {
    expect(component.find('a').at(3).text()).to.equal('See all notifications');
  });
  it('has a div with msg-list class', function() {
    expect(component.find('div.msg-list').length).to.equal(1);
  });
  it('has a span with notification count', function() {
    expect(component.find('span').text()).to.equal('3');
  });
});
