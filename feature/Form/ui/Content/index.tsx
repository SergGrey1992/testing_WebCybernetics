'use client'

import type { PropsWithChildren } from 'react'
import React from 'react'

import { Button, ButtonType } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { Input } from '@/shared/ui/Input'

import { useStore } from '@/feature/Form/lib/state'

import styles from './styles.module.css'
import { Checkbox } from '@/shared/ui/Checkbox/index'
import { classNames } from '@/shared/lib/index'

interface IndexPropsType {}

export const Content = ({}: PropsWithChildren<IndexPropsType>) => {
    const toggle = useStore((state) => state.toggle)
    return (
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <div className={styles.top}>
                <div onClick={toggle} className={styles.closeBox}>
                    <Icon as={'close'} width={24} height={24} />
                </div>
            </div>
            <h2 className={styles.titleForm}>Войти в систему</h2>
            <form className={styles.form}>
                <div className={styles.group}>
                    <Input
                        autoComplete={'new-password'}
                        placeholder={'Email/Телефон'}
                    />
                    <Input
                        type='password'
                        autoComplete={'new-password'}
                        placeholder={'Пароль'}
                    />
                </div>

                <div className={styles.checkboxBox}>
                    <Checkbox title={'Запомнить пароль'} />
                </div>
                <div>
                    <button className={styles.restoreBtn}>Восстановить</button>
                </div>
            </form>
            <div className={classNames(styles.group, {}, [styles.spacing])}>
                <Button>Войти</Button>
                <Button variant={ButtonType.secondary}>
                    Зарегестрироваться
                </Button>
            </div>
        </div>
    )
}
