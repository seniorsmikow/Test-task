import styles from "./Feedback.module.scss";

export const Feedback = ({ text, name, user }) => {
  return (
    <>
      <div className={styles.feedback__comment_wrapper}>
        <div className={styles.slider__comment_text}>{text}</div>
      </div>
      <div className={styles.feedback__user_wrapper}>
        <div className={styles.feedback__comment_name}>{name},</div>
        <div className={styles.feedback__comment_user}>{user}</div>
      </div>
    </>
  );
};
