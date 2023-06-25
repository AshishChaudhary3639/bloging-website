import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import AddComment from "../components/AddComment";
const SinglePost = () => {
  const [single, setSingle] = useState([]);
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleFavourite = () => {
    let arr = JSON.parse(localStorage.getItem("favourite")) || [];
    if (arr.length !== 0) {
      let isExist = arr.find((e) => {
        return e.id === single.id;
      });
      if (!isExist) {
        arr.push(single);
        localStorage.setItem("favourite", JSON.stringify(arr));
      } else {
        setIsAdded(true);
        alert("This post already in favourite list");
      }
    } else {
      arr.push(single);
      localStorage.setItem("favourite", JSON.stringify(arr));
    }
  };
  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("favourite")) || [];
    if (arr.length !== 0) {
      let isExist = arr.find((e) => {
        return e.id === single.id;
      });
      if (isExist) {
        setIsAdded(true);
      }
    }
  }, [single]);
  useEffect(
    () => {
      const getSinglePost = async () => {
        let res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        let data = await res.json();
        setSingle(data);
      };
      getSinglePost();
      const getAuthor = async () => {
        let res = await fetch(
          `https://jsonplaceholder.typicode.com/users?id=${single.userId}`
        );
        let data = await res.json();
        setAuthor(data);
      };
      getAuthor();
      const getPostComments = async () => {
        let data = JSON.parse(localStorage.getItem("blogComments"));
        setComments(data);
      };
      getPostComments();
    },
    [id, single]
  );

  return (
    <div>
      <div className="backtohomebtn">
        <button onClick={() => navigate("/")}>Home</button>
        <div className="button" onClick={handleFavourite}>
          Favourite{" "}
          <span>{isAdded ? <AiFillHeart /> : <AiOutlineHeart />}</span>
        </div>
      </div>
      <div className="title">
        <h2>{single.title}</h2>
        <h3>{new Date().toLocaleDateString()}</h3>
      </div>
      <h1
        style={{ fontSize: "1.5rem", fontWeight: "bold", paddingLeft: "10px" }}
      >
        Author: {author[0]?.name}
      </h1>
      <div style={{ padding: "1rem" }}>
        <div>{single.body}</div>
        <div>{single.body}</div>
        <div>{single.body}</div>
        <div>{single.body}</div>
        <div>{single.body}</div>
        <div>{single.body}</div>
        <br />
        <div>{single.body}</div>
        <div>{single.body}</div>
        <div>{single.body}</div>
        <div>{single.body}</div>
        <div>{single.body}</div>
        <div>{single.body}</div>
        <br />
        <div>{single.body}</div>
        <div>{single.body}</div>
        <div>{single.body}</div>
        <div>{single.body}</div>
        <div>{single.body}</div>
        <div>{single.body}</div>
      </div>

      <div className="comments-section">
        <AddComment user={author} postId={id}/>
        <div className="comment-heading">
          <h1>{comments?comments.length:0} Comments</h1>
        </div>
        {comments && comments?.map((e,i) => (
              <div key={i}>
                <div className="user" key={e.id}>
                  <div className="user-details">
                    <div className="user-pic"><img src={`${e.pic}`} alt="img" /></div>
                    <div className="user-info">
                      <h2>{`${e.name}`}</h2>
                      <h3>{`${e.email}`}</h3>
                    </div>
                  </div>
                  <div className="comment">
                    <p>{`${e.comment}`}</p>
                  </div>
                </div>
                <hr />
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default SinglePost;
