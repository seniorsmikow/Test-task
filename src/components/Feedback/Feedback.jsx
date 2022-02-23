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
    <div className={styles.slider__comment_wrapper}>
      <p
        className={
          show ? styles.slider__full_comment : styles.slider__comment_text
        }
      >
        {text}
      </p>
      <button onClick={toggleShow}>
        {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </button>
      <div className={styles.slider__user_wrapper}>
        <span className={styles.slider__comment_name}>{name},</span>
        <small className={styles.slider__comment_user}>{user}</small>
      </div>
    </div>
  );
};
