import React from 'react';
import { shallow } from 'enzyme';
import EachBlockItem from '../../components/EachBlockItem'
import {actions, block} from '../fixtures/sampleBlockDetails'


test('renders the component correctly with fixture data', ()=>{
    const wrapper= shallow(<EachBlockItem actions={actions} block={block}/>)
   expect(wrapper.debug()).toMatchSnapshot()
})

test('calls onBlockItemClick method on button click', ()=>{
    const onClickMock = jest.fn();
    EachBlockItem.prototype.onBlockItemClick=onClickMock
    const wrapper = shallow(<EachBlockItem actions={actions} block={block}/>);
    wrapper.find('div').at(1).simulate('click')
    expect(onClickMock).toHaveBeenCalled()
})