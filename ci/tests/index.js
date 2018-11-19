import { assert } from 'chai';
import { shallow } from 'enzyme';
import { stub } from 'sinon';

import React from 'react';

import Dumbponent from '../../src/dumbponent.jsx';
import Smartponent from '../../src/smartponent.jsx';
import Dumbposite from '../../src/dumbposite.jsx';

describe('~SOMETHING~', () => {
  it('is true', () => {
    assert(true);
  });
});

const SuppressConsole = (meth) => {
  stub(console, 'log');
  let ret_val = meth();
  console.log.restore();
  return ret_val;
};


describe('<Dumbponent />', () => {
  /*
  beforeEach('--- before ---', () => {
    console.log('before');
    stub(console, 'log');
  });

  afterEach('--- after ---', () => {
    try { console.log.restore(); } catch(err) { throw err; }
    console.log('after');
  });
  */
  const wrapper = SuppressConsole(() => { return shallow(<Dumbponent />);});

  it('is ok', () => {
    assert.isOk(wrapper);
  });

  it('is loud', () => {
    assert.isOk(wrapper.find('h1'));
  });

  it('speaks', () => {
    assert.typeOf(wrapper.find('h1').text(), 'string');
  });

  describe('it\'s <Dumbposite />', () => {
    const sub_wrapper = wrapper.find(Dumbposite).shallow();
    
    it('is there', () => {
      assert.isOk(sub_wrapper);
    });

    it('has two children', () => {
      assert.lengthOf(sub_wrapper.children(), 2);
    });

  });

  describe('it\'s <Smartponent />', () => {
    const instance = wrapper.find(Smartponent);

    it('is there', () => {
      assert.lengthOf(instance,1);
    });

    it('fails if input is not numbers', () => {
      let smp = SuppressConsole(() => shallow(<Smartponent aValue="a" bValue="b" operation="+" />));
      assert.equal(smp.text(), 'fail : invalid input');
      smp.unmount();
    });

    it('fails if operation is not a string', () => {
      let smp = SuppressConsole(() => shallow(<Smartponent aValue="2" bValue="5" operation={42} />));
      assert.equal(smp.text(), 'fail : wrong operation type');
    });

    it('fails if operation is invalid', () => {
      let smp = SuppressConsole(() => shallow(<Smartponent aValue="2" bValue="5" operation="^" />));
      assert.equal(smp.text(), 'fail : invalid operation');
    });

    it('performs addition', () => {
      let smp = SuppressConsole(() => shallow(<Smartponent aValue={2} bValue={5} operation="+" />));
      assert.equal(smp.text(), '2 + 5 = 7');
    });

    it('performs subtraction', () => {
      let smp = SuppressConsole(() => shallow(<Smartponent aValue="2" bValue="5" operation="-" />));
      assert.equal(smp.text(), '2 - 5 = -3');
    });

  });

});