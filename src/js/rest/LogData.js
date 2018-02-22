import React from 'react'
import { render } from 'react-dom'
import request from 'superagent'

const REQUEST_URL = 'http://localhost:8080/api/log'
const Image_URL = 'http://localhost:8080/image/'

export class LogData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      createCount:0,
      deleteCount:0,
    };
  }

  LogGetData () {
    request
    .post(REQUEST_URL)
    .set('Authorization',this.props.token)
    .send({'logDate':this.refs.year.value.trim()+'-'+this.refs.month.value.trim()+'-'+this.refs.day.value.trim()})
    .end((err, res) => {
      if (err) {
        console.log('error')
        return
      }
      var keys = res.body.map(obj => obj.productApi)
      for(var i in keys){
        if(keys[i].includes("create")) {
          this.setState({
            createCount:this.state.createCount + 1
          })
        }else if(keys[i].includes("delete")) {
          this.setState({
            deleteCount:this.state.deleteCount + 1
          })
        }
      }
      this.setState({
        data: res.body,
      })
    })
  }

  LogGetClick() {
    this.setState({
      createCount:0,
      deleteCount:0
    })
    this.LogGetData()
  }

  render(){
    return(
      <ul>
      <input type="text" placeholder="年" ref="year" />
      <input type="text" placeholder="月" ref="month" />
      <input type="text" placeholder="日" ref="day" />
      <button onClick={this.LogGetClick.bind(this)}>Log</button>
      <p>create {this.state.createCount}</p>
      <p>delete {this.state.deleteCount}</p>
      {this.state.data.map((item) => {
        return (
          <li key={item.id}>{item.id},{item.name},{item.price},{item.author},{item.introduction},{item.productApi} <img src={Image_URL+item.imageUrl} /></li>
        )
      })}
      </ul>
    )
  }
}
