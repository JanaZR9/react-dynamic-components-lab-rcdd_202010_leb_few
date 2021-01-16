<<<<<<< HEAD
import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
       <div className="comment">
        {this.props.commentText}
      </div>
    )
  }
}
=======
//your code here
import React, { Component } from 'react';

class Comment extends Component {
  render(){
    return (
      <div className="comment">
      {this.props.commentText};
      </div>
      )
  }
}

export default Comment
>>>>>>> 21bb001ce0d0d82968b26cd3b251dc22c7cf873b
