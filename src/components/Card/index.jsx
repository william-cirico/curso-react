import styles from "./Card.module.css";

export default function Card(props) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{props.titulo}</h2>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
}