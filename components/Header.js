import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.links}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>

                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header