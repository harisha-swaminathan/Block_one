import React from 'react'
import * as Eos from 'eosjs'
import EachBlockItem from './EachBlockItem'


export default class GetBlockDetails extends React.Component{
    constructor(){
        super()
        this.state={
            block:[],
            actions:[]
        }
    }
    async fetchRecentBlocks(){
        const blocks=[]
        let block
        let actions=[]
        let action
        const rpc = new Eos.JsonRpc('http://127.0.0.1:8888', {});
        const info= await rpc.get_info()
        let id=info.head_block_num
        for(let i=0;i<10;i++){
            block= await rpc.get_block(id)

            action= await rpc.history_get_actions(block.producer)
            // block['action']=action
            actions.push(action.actions)
           
            
            blocks.push(block)
            id=block.previous
        }
        this.setState({block:blocks, actions})

    }
    onLoadClick=()=>{
        this.fetchRecentBlocks()
    }
    componentDidMount(){
        this.fetchRecentBlocks()
        }

    render(){
        return(
        <div className="container">
            <button onClick={this.onLoadClick} className="block__button">Load recent</button>
            <div className="block">
                    {this.state.block.length!==0 && 
                        <div>
        
                            {this.state.block.map((block, i)=>{
                            return <EachBlockItem key={block.id} block={block} actions={this.state.actions[i]}/>})}
                        </div>
                    }
            </div>
        </div> 
        )
    }
}