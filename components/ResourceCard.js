import Link from 'next/link';
import styles from '../styles/Card.module.css';

const ResourceCard = (props) => {
    return (
        <article className={styles.card}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <Link href={props.link}
                target='_blank'
                rel='noopener noreferrer'>
                {props.link}
            </Link>
        </article>
    )
}

export default ResourceCard