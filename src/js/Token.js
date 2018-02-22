import React from 'react';
import { render } from 'react-dom';

import { ChangeCount } from './ChangeCount.js'
import { Footer } from './Footer.js'

export class Token extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      token: null,
    }
  }
  changeText() {
   this.setState({
     token: this.refs.token.value.trim(),
   })
 }
  render(){
    return(
      <div>
      <h1>Rest Api</h1>
      <input type="text" placeholder="トークン" ref="token" onChange={this.changeText.bind(this)} />
      <ChangeCount token={this.state.token} />
      <Footer />
      </div>
    )
  }
}
