import React from "react";
import "./Comment.css";

const Comment = ({ author, date, text }) => {
  return (
    <div className="comment">
      {/*<a className="avatar"></a>*/}
      <div className="content">
        <p className="author">{author}</p>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{text}</div>
        <div className="actions">
          <button className="reply">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
