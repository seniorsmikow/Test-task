import styles from "./PostsBlock.module.scss";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Post } from "../Post/Post";
import Img1 from "../../images/desktop/img1.png";
import Img1x2 from "../../images/desktop/img1@2x.png";
import Img1x3 from "../../images/desktop/img1@3x.png";
import Img2 from "../../images/desktop/img2.png";
import Img2x2 from "../../images/desktop/img2@2x.png";
import Img2x3 from "../../images/desktop/img2@3x.png";
import Img3 from "../../images/desktop/img3.png";
import Img3x2 from "../../images/desktop/img3@2x.png";
import Img3x3 from "../../images/desktop/img3@3x.png";
import ImgMobile1x1 from "../../images/mobile/img1.png";
import ImgMobile1x2 from "../../images/mobile/img1@2x.png";
import ImgMobile1x3 from "../../images/mobile/img1@3x.png";
import ImgMobile2x1 from "../../images/mobile/img2.png";
import ImgMobile2x2 from "../../images/mobile/img2@2x.png";
import ImgMobile2x3 from "../../images/mobile/img2@3x.png";
import ImgMobile3x1 from "../../images/mobile/post3.png";
import ImgMobile3x2 from "../../images/mobile/post3@2x.png";
import ImgMobile3x3 from "../../images/mobile/post3@3x.png";
import { useMediaQuery } from "react-responsive";

export const PostsBlock = () => {
  const [posts, setPosts] = useState(null);
  const [active, setActive] = useState(true);
  const isMobile = useMediaQuery({
    query: "(max-width: 320px)",
  });

  const sortPostsByDate = (posts) => {
    setPosts(
      posts.sort((a, b) => {
        if (a.date.split("-").join() > b.date.split("-").join()) {
          return -1;
        }
      })
    );
  };

  const getPosts = async () => {
    try {
      const response = await fetch("blog_posts.json");
      if (response) {
        const data = await response.json();
        sortPostsByDate(data);
      } else {
        alert("Произошла ошибка");
      }
      setActive(false);
    } catch (e) {
      alert("Произошла ошибка " + e.message);
    }
  };

  return (
    <div className={styles.news__block_wrapper}>
      <h1>What's New?</h1>
      <div className={styles.posts__block_wrapper}>
        {isMobile ? (
          <>
            <Post
              img={ImgMobile1x1}
              text={`Instagram FAQ — 
              All You Need To Know`}
              url={
                "https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b"
              }
              srcSet={`${ImgMobile1x2} 2x, ${ImgMobile1x3} 3x`}
            />

            <Post
              img={ImgMobile2x1}
              text={"DMEXCO 2019 — Meet Combin in Cologne"}
              url={
                "https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63"
              }
              srcSet={`${ImgMobile2x2} 2x, ${ImgMobile2x3} 3x`}
            />

            <Post
              img={ImgMobile3x1}
              text={
                "Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1"
              }
              url={
                "https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7"
              }
              srcSet={`${ImgMobile3x2} 2x, ${ImgMobile3x3} 3x`}
            />
          </>
        ) : (
          <>
            <Post
              img={Img1}
              text={`Instagram FAQ — 
          All You Need To Know`}
              url={
                "https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b"
              }
              srcSet={`${Img1x2} 2x, ${Img1x3} 3x`}
            />

            <Post
              img={Img2}
              text={"DMEXCO 2019 — Meet Combin in Cologne"}
              url={
                "https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63"
              }
              srcSet={`${Img2x2} 2x, ${Img2x3} 3x`}
            />

            <Post
              img={Img3}
              text={
                "Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1"
              }
              url={
                "https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7"
              }
              srcSet={`${Img3x2} 2x, ${Img3x3} 3x`}
            />
          </>
        )}
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
