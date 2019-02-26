import MarkdownData from "../../data/post.md";
import React from 'react';
import imagePath from '../images/square.jpg';

export default () => (
  <div className="profile">
    <img src={imagePath} alt="" />
    <h1>{MarkdownData.title}</h1>
    <div className="content"
         dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}>
    </div>
  </div>
);