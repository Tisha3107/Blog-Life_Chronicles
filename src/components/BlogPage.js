// BlogPage.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../BlogContext";

const BlogPage = () => {
  const { blogPosts } = useContext(BlogContext);

  return (
    <div style={{ marginTop: "20px", marginLeft: "300px" }}>
      {blogPosts.length > 0 ? (
        blogPosts.map((post) => (
          <div key={post.id} style={{ marginTop: "20px", marginLeft: "40px" }}>
            <div
              style={{
                width: "700px",
                marginLeft: "100px",
                backgroundColor: "#FFFAF0",
                borderRadius: "20px",
                border: "1px solid black",
                textAlign: "center",
              }}
              className="mb-3"
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={post.image}
                    style={{
                      height: "250px",
                      width: "300px",
                      borderRadius: "20px",
                    }}
                    alt="Blog"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 style={{ marginLeft: "70px", marginTop: "20px" }}>
                      {post.title}
                    </h5>
                    <p
                      className="card-text"
                      style={{ marginLeft: "50px", fontSize: "17px" }}
                    >
                      {post.description}
                    </p>
                    <p>Posted By : {post.name}</p>
                    <Link to={`/blog/${post.id}`}>
                      <button
                        style={{
                          height: "40px",
                          width: "120px",
                          backgroundColor: "red",
                          color: "white",
                          fontSize: "18px",
                          borderRadius: "10px",
                          marginTop: "10px",
                          marginLeft: "20px",
                        }}
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No blog posts available</p>
      )}
    </div>
  );
};

export default BlogPage;
