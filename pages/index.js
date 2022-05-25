import Head from 'next/head';
// import Image from 'next/image'
import styles from '../styles/Layout.module.css';
import ResourceCard from '../components/ResourceCard';
import data from '../resources.json';

export default function Home() {
  let cards = data.map((element, index) => {
    return (<ResourceCard key={"card" + index} name={element.name} description={element.description} link={element.link} />)
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Project Mouseion</title>
        <meta name="description" content="Welcome to a simple dev library" />
        <meta name="keywords" content="dev, developer, library, resources, learning, tools, web, web development, frontend, backend, " />
        <meta name="author" content="JJKneiss" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.grid}>
        {cards}
      </div>
    </div >
  )
}
