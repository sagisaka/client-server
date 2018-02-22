import React from 'react'
import { render } from 'react-dom'
import request from 'superagent'

const REQUEST_URL = 'http://localhost:8080/api/product'

export class PostData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    };
  }

  PostData () {
    request
    .post(REQUEST_URL)
    .set('Authorization',this.props.token)
    .attach('file', document.getElementById('myfile').files[0])
    .field('name', this.refs.name.value.trim())
    .field('introduction', this.refs.introduction.value.trim())
    .field('price', this.refs.price.value.trim())
    .end(function(err, res){
      console.log(res.body);
    });
  }

  PostClick() {
    this.PostData()
  }
  render(){
    return(
      <ul>
      <input type="text" placeholder="タイトル" ref="name" />
      <input type="text" placeholder="詳細" ref="introduction" />
      <input type="text" placeholder="価格" ref="price" />
      <input type="file" id="myfile" />
      <button onClick={this.PostClick.bind(this)}>post</button>
      </ul>
    )
  }
}
