import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = () => {
  const [singapi, singalblogdata] = useState({});
  const router = useRouter();
  const { singalblog } = router.query;

  const getsingalblogdata = async () => {
    try {
      const mysingalblog = await axios.get(
        `http://localhost:3000/posts/${singalblog}`
      );
      singalblogdata(mysingalblog.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getsingalblogdata();
  }, []);

  const { author, dec, title } = singapi;
  return (
    <>
      <div className="myblog">
        <div className="blogcontent">
          <h1>{title}</h1>
          <p>{dec}</p>
          <p className="author">Blog-author {author}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
