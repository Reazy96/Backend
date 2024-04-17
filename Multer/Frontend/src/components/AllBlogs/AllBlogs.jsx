import { useState } from "react";

const AllBlogs = ({ BlogID, BlogTitle, BlogImage, BlogText }) => {
  return (
    <main>
      <p>{BlogID}</p>
      <p>{BlogTitle}</p>
      <img src={"http://localhost:1122/" + BlogImage} alt="" />
      <p>{BlogText}</p>
    </main>
  );
};

export default AllBlogs;

// 1 fetche alle
// 2 rendern
// 3 formular bauen
// 4 blog add
