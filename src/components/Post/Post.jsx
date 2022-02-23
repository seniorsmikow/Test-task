import styles from "./Post.module.scss";

export const Post = ({ img, text, url }) => {
  return (
    <a href={url} role="button" target="_blank" rel="noreferrer">
      <div className={styles.post__wrapper}>
        <img src={img} alt="post_image" />
        <p>{text}</p>
      </div>
    </a>
  );
};
