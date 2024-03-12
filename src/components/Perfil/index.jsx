import styles from './Perfil.module.css';

export default ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name} >
                {nomeUsuario}
            </h1>
        </header>
    )
}

/* tipos de exportação:

#1
export default function(){
    return (
    )
}

#2
const Perfil = () => {}
export default Perfil;
*/