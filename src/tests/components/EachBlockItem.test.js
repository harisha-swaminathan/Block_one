import React from 'react';
import { shallow } from 'enzyme';
import EachBlockItem from '../../components/EachBlockItem'
import {actions, block} from '../fixtures/sampleBlockDetails'


test('renders the component correctly with fixture data', ()=>{
    const wrapper= shallow(<EachBlockItem actions={actions} block={block}/>)
   expect(wrapper.debug()).toMatchSnapshot()
})

test('calls onBlockIitemClick method on button click', ()=>{
    
})