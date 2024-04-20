import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./css/AllQuestions.css";
// import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
// import { stringAvatar } from "../../utils/Avatar";

function AllQuestions() {

  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to = "/question">This is a question title</Link>

          {/* <a href=>{data.title}</a> */}

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div>
                what i want is an example about how to make thsjfkjkgnkgndknvkdfngjfdbgjfbnmbdfngbjdfbjbjbjnjnfdbnjbjnf
            </div>
            {/* <div>{ReactHtmlParser(truncate(data.body, 200))}</div> */}
          </div>
          <div
            style={{
              display: "flex",
            }}
          >

<span className="question-tags">react</span>
<span className="question-tags">antd</span>
<span className="question-tags">Frontend</span>


          </div>
          <div className="author">
            <small>Timestamp</small>
            <div className="author-details">
                <Avatar/>
                <p>user name</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;