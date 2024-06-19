import React from "react";
import "./App.css";
import BlogPage from "./components/BlogPage";
import DetailBlogPage from "./components/DetailBlogPage";
import Nav from "./components/Nav";
import { BlogProvider } from "./BlogContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./Pages/UserPage";

function App() {
  return (
    <Router>
      <BlogProvider>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/blog/:id" element={<DetailBlogPage />} />
          </Routes>
        </div>
      </BlogProvider>
    </Router>
  );
}

export default App;
