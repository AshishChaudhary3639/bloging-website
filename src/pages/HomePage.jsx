import React from "react";
import "./home.css";
import { useEffect } from "react";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { getBlogPosts } from "../redux/appReducer/action";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";
import Searching from "../components/Searching";
const HomePage = () => {
  const posts = useSelector((store) => store.appReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getBlogPosts());
    }
  }, [dispatch, posts]);
  return (
    <>
      <div className="main">
        <div className="header">
          <div>
            <div className="header-text">
              <h2>Blogging the Tech world</h2>
              <h2> Blog Project</h2>
              <Link
                activeClass="active"
                to="postSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button>Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Searching />
      <div className="posts-sections" id="postSection">
        <div className="latest-posts">
          <h1>Latest Posts</h1>
          <div className="posts-container">
            {posts &&
              posts?.map((e) => (
                <RouteLink key={e.id} to={`/posts/${e.id}`}>
                  <Post ele={e} />
                </RouteLink>
              ))}
          </div>
        </div>
        <div className="popular-posts">
          <div className="popular-single-post">
            <h2>{}</h2>
            <p>{}</p>
          </div>

          <div className="popular-single-post">
            <h2>{}</h2>
            <p>{}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
