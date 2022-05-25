import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <meta name="description" content="Welcome to a simple dev library" />
                <meta name="keywords" content="dev, developer, library, resources, learning, tools, web, web development, frontend, backend, " />
                <meta name="author" content="JJKneiss" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2>About</h2>
        </div >
    )
}
