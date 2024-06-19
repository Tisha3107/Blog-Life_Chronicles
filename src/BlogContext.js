// BlogContext.js
import React, { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  // Load blog posts from localStorage on component mount
  useEffect(() => {
    const storedBlogPosts = localStorage.getItem("blogPosts");
    if (storedBlogPosts) {
      try {
        const parsedPosts = JSON.parse(storedBlogPosts);
        console.log("Loaded blog posts from localStorage:", parsedPosts);
        setBlogPosts(parsedPosts);
      } catch (error) {
        console.error("Error parsing blogPosts from localStorage:", error);
      }
    }
  }, []);

  // Save blog posts to localStorage whenever blogPosts changes
  useEffect(() => {
    try {
      console.log("Saving blog posts to localStorage:", blogPosts);
      localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
    } catch (error) {
      console.error("Error saving blogPosts to localStorage:", error);
    }
  }, [blogPosts]);

  const addBlogPost = (newPost) => {
    setBlogPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
