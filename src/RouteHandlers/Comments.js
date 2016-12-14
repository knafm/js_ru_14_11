import React, { Component} from 'react'
import AllComments from '../components/AllComments'

class Comments extends Component {
  render(){
    return (
      <div>
        <h1>test route </h1>
        {this.props.children}
        <AllComments article={{id :"56c782f17b4e0ba78c7ad717", commentsLoaded:false }}
          isOpen={true}
          />
      </div>
    )
  }
}

export default Comments
