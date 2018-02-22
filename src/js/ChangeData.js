import React from 'react';
import { render } from 'react-dom';

import { GetData } from './rest/GetData.js'
import { PostData } from './rest/PostData.js'
import { PutData } from './rest/PutData.js'
import { DeleteData } from './rest/DeleteData.js'
import { LogData } from './rest/LogData.js'

export class ChangeData extends React.Component{

  render(){
    if (this.props.count == 0) {
      return(
        <div>
        <GetData token={this.props.token}/>
        </div>
      )
    }else if(this.props.count == 1){
      return(
        <div>
        <PostData token={this.props.token}/>
        </div>
      )
    }else if(this.props.count == 2){
      return(
        <div>
        <PutData token={this.props.token}/>
        </div>
      )
    }else if(this.props.count == 3){
      return(
        <div>
        <DeleteData token={this.props.token}/>
        </div>
      )
    }else{
      return(
        <div>
        <LogData token={this.props.token}/>
        </div>
      )
    }
  }
}
