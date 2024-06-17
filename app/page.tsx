import Image from 'next/image'

import { Form } from '@/feature/Form'
import { ActionModal } from '@/feature/ActionModal'

import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.sectionMain}>
                <div className={styles.left}>
                    <div className={styles.inner}>
                        <h1 className={styles.title}>Демо-версия</h1>
                        <p className={styles.description}>
                            За 18 лет деятельности было реализовано более 500
                            крупных, а так же, не менее 2500 средних и малых
                            проектов. Используя знания и накопленный опыт мы
                            можем предложить
                        </p>
                    </div>
                    <div className={styles.innerButton}>
                        <ActionModal />
                    </div>
                </div>
                <div className={styles.imageBox}>
                    {/*для реализации такого функционала как на дизайне
                     мне необходимо поговорить с дизайнером чтобы были внесены определеные
                     правки*/}
                    <Image
                        src={'/main.png'}
                        alt='Main image'
                        fill
                        className={styles.image}
                    />
                </div>
            </section>
            <Form />
        </main>
    )
}
