import styles from "./SegundoComponente.module.css";

export default function SegundoComponente() {
    // Lógica do componente
    const nome = "William";

    return (
        <div>
            <h2 className={styles.red}>Segundo Componente 👍</h2>
            <p>Oi, meu nome é {nome.toUpperCase()}</p>
        </div>
    );
}