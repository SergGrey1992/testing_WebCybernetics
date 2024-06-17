import Image from 'next/image'

import styles from './page.module.css'
import { Button } from '@/shared/ui/Button/index'
import { Icon } from '@/shared/ui/Icon/index'

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
                        <Button
                            rounded
                            rightIcon={
                                <div className={styles.iconBox}>
                                    <Icon
                                        as={'arrow_up_right'}
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            }
                        >
                            Попробовать бесплатно
                        </Button>
                    </div>
                </div>
                <div className={styles.imageBox}>
                    <Image
                        src={'/main.png'}
                        alt='Main image'
                        fill
                        className={styles.image}
                    />
                </div>
            </section>
        </main>
    )
}
