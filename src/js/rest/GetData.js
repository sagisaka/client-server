import React from 'react'
import { render } from 'react-dom'
import request from 'superagent'

const REQUEST_URL = 'http://localhost:8080/api/product'
const Image_URL = 'http://localhost:8080/image'

export class GetData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    };
  }

  AllGetData () {
    request
    .get(REQUEST_URL)
    .set('Context', 'application/json')
    .set('Authorization',this.props.token)
    .end((err, res) => {
      if (err) {
        console.log('error')
        return
      }
      this.setState({
        data: res.body
      })
    })
  }
  SearchGetData () {
    request
    .post(REQUEST_URL+'/sam')
    .set('Authorization',this.props.token)
    .send({'name':this.refs.search.value.trim()})
    .end((err, res) => {
      if (err) {
        console.log('error')
        return
      }
      this.setState({
        data: res.body
      })
    })
  }
  AllGetClick() {
    this.AllGetData()
  }
  SearchGetClick() {
    this.SearchGetData()
  }
  render(){
    return(
      <ul>
      <button onClick={this.AllGetClick.bind(this)}>全てのデータ</button>
      <input type="text" placeholder="検索したいタイトル" ref="search" />
      <button onClick={this.SearchGetClick.bind(this)}>検索</button>
      {this.state.data.map((item) => {
        return (
          <li key={item.id}>{item.id},{item.name},{item.price},{item.author},{item.introduction} <img src={Image_URL+item.imageUrl} /></li>
        )
      })}
      </ul>
    )
  }
}
