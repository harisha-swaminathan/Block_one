import React from 'react'
import JSONPretty from 'react-json-pretty';

export default class EachBlockItem extends React.Component{
    constructor(){
        super()
        this.state={
            open:false
        }
    }
    onBlockItemClick(){
        this.setState((prevState)=>{
            return {open:!prevState.open}
        })
    }
    
    render(){
        const time=this.props.block.timestamp
        const id=this.props.block.id
        const actions=this.props.actions
       
        return(
            <div className="app">
                <div onClick={()=>{this.onBlockItemClick()}} className="block__item">
                  {/* <span className="block__item-title">Time stamp:</span> */}
                    <p>{time}</p>
                  {/* <span className="block__item-title">Id:</span> */}
                    <p>{id}</p>
                    <p>{`${actions.length}`}</p>
                  {this.state.open && <JSONPretty themeClassName="block__item--open" data={this.props.block}></JSONPretty>}
                </div>
                  
            </div>
      
        )
    }
}