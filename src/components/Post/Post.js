import React from "react";
import s from "./Post.module.css";

class Post extends React.Component {
  render() {
    return (
      <div className={s.post}>
        <h6>{this.props.header}</h6>
        <p>{this.props.content}</p>
        <hr />
      </div>
    );
  }
}

export default Post;
