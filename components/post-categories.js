import styles from 'styles/scss/post-categories.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

export default function PostCategories({ categories }) {
    return (
        <div className={styles.flexContainer}>
        <h3 className={styles.heading}>
        <span className="sr-only">Categories</span>
        </h3>
        <ul className={styles.list}>
            {categories.map(({ name, slug }) => (
                <li key={slug}>
                    <Link href={`/work/category/${slug}`}>
                     <a>{name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    )
}