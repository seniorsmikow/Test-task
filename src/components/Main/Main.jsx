import { PostsBlock } from "../PostsBlock/PostsBlock";
import { Slider } from "../Slider/Slider";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles.main__block_wrapper}>
      <Slider />
      <PostsBlock />
    </div>
  );
};
