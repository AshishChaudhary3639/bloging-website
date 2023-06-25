import React from "react";
import "../pages/home.css";
const Post = ({ ele }) => {
  return (
    <div className="single-post">
      <div className="img">
        <img
          src={`https://primeblog.netlify.app/blogpost.c2250d38.jpg`}
          alt="img-1"
        />
      </div>
      <div className="text">
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {ele.title}
        </h2>
        <p>{ele.body}</p>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "70%",
          height: "30px",
          position: "absolute",
          bottom: "0px",
          right: "0px",
        }}
      >
        ...
      </div>
    </div>
  );
};

export default Post;
