import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            {[...Array(100)].map((_, i) => (
                <h1 key={i}>Игорь привет!!</h1>
            ))}
        </main>
    )
}
