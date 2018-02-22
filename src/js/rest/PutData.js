import React from 'react'
import { render } from 'react-dom'
import request from 'superagent'

const REQUEST_URL = 'http://localhost:8080/api/product'

export class PutData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
  }

  PutData () {
    request
    .post(REQUEST_URL+'/'+this.refs.put.value.trim())
    .set('Authorization',this.props.token)
    .attach('file', document.getElementById('myfile').files[0])
    .field('name', this.refs.name.value.trim())
    .field('introduction', this.refs.introduction.value.trim())
    .field('price', this.refs.price.value.trim())
    .end(function(err, res){
      console.log(res.body);
    });
  }
  PutClick() {
    this.PutData()
  }
  render(){
    return(
      <ul>
      <input type="text" placeholder="id" ref="put" />
      <input type="text" placeholder="タスク名" ref="name" />
      <input type="text" placeholder="詳細" ref="introduction" />
      <input type="text" placeholder="価格" ref="price" />
      <input type="file" id="myfile" />
      <button onClick={this.PutClick.bind(this)}>put</button>
      </ul>
    )
  }
}
