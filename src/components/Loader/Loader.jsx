import styles from "./Loader.module.scss";

export const Loader = () => {
    return (
        <div className={styles.loader__wrapper}>
            <div className={styles.loader__text}></div>
            <div className={styles.loader__user}></div>
            <div className={styles.loader__name}></div>
        </div>
    )
}