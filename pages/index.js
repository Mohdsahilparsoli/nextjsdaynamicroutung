import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blog, updatedblog] = useState([]);
  const blogapi = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/posts`);
      updatedblog(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    blogapi();
  });
  return (
    <>
    <div className="mainblog"> 
    {blog.map((value) => {
        const { id, title } = value;
        return (
          <> 
             <div className="learnmore">
                <h2> {title} </h2>
                <Link href={`/blog-post/${id}`}>
                  <a>About Us</a>
                </Link>
              </div>
          </>
        );
      })}
    
    </div>
    
    </>
  );
};

export default Blog;
