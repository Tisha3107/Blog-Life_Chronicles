import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../BlogContext";

const DetailBlogPage = () => {
  const { id } = useParams();
  const { blogPosts } = useContext(BlogContext);

  const blogPost = blogPosts.find((post) => post.id === id);

  if (!blogPost) {
    return <div>Blog post not found!</div>;
  }

  return (
    <div
      style={{
        backgroundColor: "#FFFAF0",
        width: "1200px",
        height: "1000px",
        marginLeft: "150px",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          marginTop: "20px",
          fontSize: "28px",
          fontStyle: "cursive",
        }}
      >
        {blogPost.title}
      </h1>
      <img
        src={blogPost.image}
        alt={blogPost.title}
        style={{ height: "400px", width: "600px", borderRadius: "20px" }}
      />
      <p style={{ fontSize: "16px", marginTop: "20px" }}>
        {blogPost.description}
      </p>
      <p style={{ fontSize: "20px", fontFamily: "cursive" }}>
        {blogPost.detail}
      </p>
    </div>
  );
};

export default DetailBlogPage;
