import { useState, useEffect } from "react";
import styles from "./Slider.module.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Feedback } from "../Feedback/Feedback";

export const Slider = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [posX, setPosX] = useState(0);
  const [isFinishNext, setIsFinishNext] = useState(false);
  const [isFinishPrev, setIsFinishPrev] = useState(false);

  const getFeedback = () => {
    try {
      setLoading(true);
      fetch("feedback_data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setData(data);
        });
      setLoading(false);
    } catch (error) {
      alert("Произошла ошибка!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeedback();
    setIsFinishPrev(true);
  }, []);

  const toPrev = () => {
    if (posX === 0) {
      setIsFinishPrev(true);
      setIsFinishNext(false);
    } else {
      setPosX(posX + 100);
      setIsFinishNext(false);
    }
  };

  const toNext = () => {
    if (posX === -100 * (data.length - 1)) {
      setIsFinishNext(true);
    } else {
      setPosX(posX - 100);
      setIsFinishPrev(false);
    }
  };

  return (
    <div className={styles.slider__wrapper}>
      <div className={styles.slider__feedback_wrapper}>
        {!loading ? (
          <div className={styles.main__feedback}>
            {data &&
              data.map((el, index) => {
                return (
                  <div
                    key={index}
                    className={styles.slider__block_wrapper}
                    style={{ transform: `translateX(${posX}%)` }}
                  >
                    <Feedback
                      key={index}
                      text={el.text}
                      name={el.name}
                      user={el.instagram_username}
                    />
                  </div>
                );
              })}
          </div>
        ) : (
          <div className={styles.main}>
            <div className={styles.slider__img_wrapper}>
              <Feedback
                text={`I registered on the AidaForm website, having stumbled 
                  upon one of the form templates, which I really liked. 
                  My first form, which is still active by the way, was published 
                  20 minutes after I found the AidaForm website and created an account!`}
                name={"Ben Johnson"}
                user={"web-store owner"}
              />
            </div>
            ); })}
          </div>
        )}
      </div>
      <div className={styles.slider__round_block}></div>
      <div className={styles.slider__buttons_wrapper}>
        <button
          className={
            isFinishPrev
              ? styles.slider__button_disabled
              : styles.slider__button
          }
          onClick={toPrev}
        >
          <ArrowBackIosNewIcon />
        </button>
        <button
          className={
            isFinishNext
              ? styles.slider__button_disabled
              : styles.slider__button
          }
          onClick={toNext}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};
