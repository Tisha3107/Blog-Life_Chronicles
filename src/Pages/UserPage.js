// UserPage.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../BlogContext";

const UserPage = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [detail, setDetail] = useState("");
  const { addBlogPost } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && title && description && image && detail) {
      const newPost = {
        id: Date.now().toString(),
        name,
        title,
        description,
        image,
        detail,
      };
      addBlogPost(newPost);
      navigate("/blog");
    } else {
      alert("Please fill in all fields and upload an image.");
    }
  };

  return (
    <>
      <h1
        style={{
          marginTop: "20px",
          fontFamily: "inherit",
          fontSize: "42px",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Create Your Own Blog
      </h1>
      <div
        style={{
          backgroundColor: "#FFFAF0",
          height: "500px",
          border: "2px solid black",
          marginTop: "20px",
          width: "900px",
          marginLeft: "330px",
        }}
      >
        <label
          style={{
            fontSize: "24px",
            fontFamily: "calibri",
            paddingRight: "50px",
            paddingTop: "40px",
            marginLeft: "20px",
          }}
        >
          Enter Your Full Name :{" "}
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          style={{
            height: "35px",
            width: "400px",
            border: "2px solid gold",
            borderRadius: "20px",
            paddingLeft: "15px",
          }}
          type="text"
        ></input>
        <label
          style={{
            fontSize: "24px",
            fontFamily: "calibri",
            paddingRight: "50px",
            paddingTop: "40px",
          }}
        >
          Title of the Blog:{" "}
        </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          style={{
            height: "35px",
            width: "400px",
            border: "2px solid gold",
            borderRadius: "20px",
            paddingLeft: "15px",
          }}
        />
        <label
          htmlFor="textbox"
          style={{
            fontSize: "24px",
            fontFamily: "calibri",
            paddingRight: "40px",
            paddingTop: "10px",
            marginLeft: "30px",
            marginTop: "15px",
          }}
        >
          Description of the Blog:{" "}
        </label>
        <input
          type="text"
          style={{
            height: "35px",
            width: "400px",
            border: "2px solid gold",
            borderRadius: "20px",
            paddingLeft: "15px",
          }}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <br />
        <br />
        <label
          style={{
            fontSize: "24px",
            fontFamily: "calibri",
            paddingRight: "40px",
            paddingTop: "40px",
            marginLeft: "50px",
          }}
        >
          Detail Description :{" "}
        </label>
        <input
          type="text"
          style={{
            height: "100px",
            width: "400px",
            border: "2px solid gold",
            borderRadius: "20px",
            marginLeft: "20px",
            paddingLeft: "15px",
          }}
          onChange={(e) => setDetail(e.target.value)}
          value={detail}
        />
        <label
          style={{
            fontSize: "24px",
            fontFamily: "calibri",
            paddingRight: "70px",
            marginLeft: "-50px",
            paddingTop: "10px",
          }}
        >
          Upload Blog Image:
        </label>
        <input
          type="file"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          style={{ fontSize: "16px" }}
        />
        <br />
        <br />
        <button
          onClick={handleSubmit}
          style={{
            height: "40px",
            width: "150px",
            borderRadius: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
          }}
        >
          SUBMIT
        </button>
      </div>
    </>
  );
};

export default UserPage;
