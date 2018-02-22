import React from 'react'
import { render } from 'react-dom'
import request from 'superagent'

const REQUEST_URL = 'http://localhost:8080/api/product'

export class DeleteData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
  }
  DeleteData () {
    request
    .del(REQUEST_URL+'/'+this.refs.delete.value.trim())
    .set('Authorization',this.props.token)
    .end(function(err, res){
      console.log(res.body);
    });
  }
  DeleteClick() {
    this.DeleteData()
  }
  render(){
    return(
      <ul>
      <input type="text" placeholder="id" ref="delete" />
      <button onClick={this.DeleteClick.bind(this)}>del</button>
      </ul>
    )
  }
}
