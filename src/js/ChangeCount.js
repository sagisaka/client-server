import React from 'react';
import { render } from 'react-dom';

import { ChangeData } from './ChangeData.js'

export class ChangeCount extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  handleClick() {
    if(this.state.count<4){
      this.setState({
        count: this.state.count + 1,
      })
    }else{
      this.setState({
        count: 0,
      })
    }
  }
  render(){
    return(
      <div>
      <button onClick={this.handleClick.bind(this)}>変更</button>
      <ChangeData count={this.state.count} token={this.props.token}/>
      </div>
    )
  }
}
