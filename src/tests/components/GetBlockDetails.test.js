import React from 'react';
import { shallow } from 'enzyme';
import GetBlockDetails from '../../components/GetBlockDetails'
import Eos from 'eosjs'

test('renders the component correctly ', () => {
    const wrapper = shallow(<GetBlockDetails />);
    expect(wrapper.debug()).toMatchSnapshot();
});

test('calls onClick function on button click  ', () => {
    const onClickSpy = jest.fn();
    GetBlockDetails.prototype.fetchRecentBlocks=onClickSpy
    const wrapper = shallow(<GetBlockDetails />);
    wrapper.find('button').simulate('click')
    expect(onClickSpy).toHaveBeenCalled()
});

// test('calls mock function 10 times to render 10 most recent blocks  ', async () => {
//     shallow(<GetBlockDetails />);
//     const rpc=Eos.JsonRpc
//     expect(Eos.JsonRpc).toHaveBeenCalled()
// });