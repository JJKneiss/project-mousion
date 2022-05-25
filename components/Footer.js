import styles from '../styles/Layout.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                <a
                    href="https://github.com/JJKneiss/project-mousion"
                    target='_blank'
                    rel='noopener noreferrer'>
                    Open source code
                </a>by Project Mouseion.
            </p>
        </footer>
    )
}

export default Footer