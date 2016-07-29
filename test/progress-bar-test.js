/* eslint-disable no-console */

import React from 'react';
import sinon from 'sinon';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import { ProgressBar } from '../src';

describe('<ProgressBar/>', function() {
  it('Should have a default class of primary without type property', function() {
    const component = shallow(<ProgressBar percentage={0}/>);
    expect(component.find('div.progress > div').hasClass('progress-bar-primary')).to.equal(true);
  });

  it('Should have a class of success', function() {
    const component = shallow(<ProgressBar percentage={0} type='success'/>);
    expect(component.find('div.progress > div').hasClass('progress-bar-success')).to.equal(true);
  });

  it('Should have a class of warning', function() {
    const component = shallow(<ProgressBar percentage={0} type='warning'/>);
    expect(component.find('div.progress > div').hasClass('progress-bar-warning')).to.equal(true);
  });

  it('Should have a class of danger', function() {
    const component = shallow(<ProgressBar percentage={0} type='danger'/>);
    expect(component.find('div.progress > div').hasClass('progress-bar-danger')).to.equal(true);
  });

  it('By default should not be animated', function() {
    const component = shallow(<ProgressBar percentage={0}/>);
    expect(component.find('div.progress > div').hasClass('animated')).to.equal(false);
  });

  it('Should not display a label', function() {
    const component = shallow(<ProgressBar label='' percentage={0}/>);
    expect(component.find('span').text('label')).to.have.length(0);
  });

  it('Should have a label when label is not empty', function() {
    const component = shallow(<ProgressBar label='label' percentage={0}/>);
    expect(component.find('span').text('label')).to.contain('label');
  });

  it('Should be striped', function() {
    const component = shallow(<ProgressBar striped={true} percentage={0}/>);
    expect(component.find('div.progress > div').hasClass('progress-bar-striped')).to.equal(true);
  });

  it('Should not be striped', function() {
    const component = shallow(<ProgressBar striped={false} percentage={0}/>);
    expect(component.find('div.progress > div').hasClass('progress-bar-striped')).to.equal(false);
  });

  before(function() {
    sinon.stub(console, 'error', (warning) => {throw new Error(warning);});
  });

  it('Should throw proptype error with invalid type property', function() {
    expect(function() { shallow(<ProgressBar type='invalid' />);}).to.throw(/Invalid prop `type`/);
  });

  after(function() {
    console.error.restore();
  });
});
