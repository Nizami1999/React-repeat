import React from "react";
import Post from "../Post/Post";
import s from "./Test.module.css";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleContent = this.handleContent.bind(this);
  }

  handleContent() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const posts = this.props.posts.map(p => (
      <Post key={p.id} header={p.header} content={p.content} />
    ));

    return (
      <div className={s.test}>
        <h1>React Repeat</h1>
        <button
          onClick={this.handleContent}
          className="btn btn-block btn-primary"
        >
          {this.state.isOpen ? "Close" : "Open"}
        </button>
        {this.state.isOpen && (
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        )}
        <h1>Posts</h1>
        {posts}
      </div>
    );
  }
}
export default Test;
