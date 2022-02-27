import styles from "./Post.module.scss";

export const Post = ({ img, text, url, srcSet }) => {
  return (
    <a href={url} role="button" target="_blank" rel="noreferrer">
      <picture className={styles.post__wrapper}>
        <img src={img} alt="post_image" srcSet={srcSet} />
        <p>{text}</p>
      </picture>
    </a>
  );
};
