import React from 'react';
import { shallow } from 'enzyme';
import GetBlockDetails from '../../components/GetBlockDetails'
const Eos = jest.requireActual('eosjs')

test('renders the component correctly ', () => {
    const wrapper = shallow(<GetBlockDetails />);
    expect(wrapper.debug()).toMatchSnapshot();
});

test('calls onClick function on button click  ', () => {
    const onClickMock = jest.fn();
    GetBlockDetails.prototype.fetchRecentBlocks=onClickMock
    const wrapper = shallow(<GetBlockDetails />);
    wrapper.find('button').simulate('click')
    expect(onClickMock).toHaveBeenCalled()
});