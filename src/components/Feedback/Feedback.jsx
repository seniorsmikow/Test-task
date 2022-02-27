import styles from "./Feedback.module.scss";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const Feedback = ({ text, name, user }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={styles.feedback__comment_wrapper}>
        <div
          className={
            show ? styles.slider__full_comment : styles.slider__comment_text
          }
        >
          {text}
        </div>
        <button onClick={toggleShow}>
          {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>
      </div>
      <div className={styles.feedback__user_wrapper}>
        <div className={styles.feedback__comment_name}>{name},</div>
        <div className={styles.feedback__comment_user}>{user}</div>
      </div>
    </>
  );
};
