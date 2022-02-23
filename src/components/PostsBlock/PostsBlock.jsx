import styles from "./PostsBlock.module.scss";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Post } from "../Post/Post";
import Img1 from "../../images/img1.png";
import Img2 from "../../images/img2.png";
import Img3 from "../../images/img3.png";

export const PostsBlock = () => {
  const [posts, setPosts] = useState(null);
  const [active, setActive] = useState(true);

  const sortPostsByDate = (posts) => {
    setPosts(
      posts.sort(function (a, b) {
        if (a.date.split("-").join() > b.date.split("-").join()) {
          return -1;
        }
      })
    );
  };

  const getPosts = () => {
    try {
      fetch("blog_posts.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          sortPostsByDate(data);
        });
      setActive(false);
    } catch (error) {
      alert("Произошла ошибка!");
    }
  };

  return (
    <div className={styles.news__block_wrapper}>
      <h1>What's New?</h1>
      <div className={styles.posts__block_wrapper}>
        <Post
          img={Img1}
          text={"Instagram FAQ — All You Need To Know"}
          url={
            "https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b"
          }
        />

        <Post
          img={Img2}
          text={"DMEXCO 2019 — Meet Combin in Cologne"}
          url={
            "https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63"
          }
        />

        <Post
          img={Img3}
          text={
            "Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1"
          }
          url={
            "https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7"
          }
        />
        {active && (
          <button onClick={getPosts}>
            Read More
            <ExpandMoreIcon className={styles.button__icon} />
          </button>
        )}

        {posts && (
          <div className={styles.posts__block_wrapper}>
            {posts.map((el) => (
              <Post key={el.date} url={el.url} text={el.title} img={Img1} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
