'use client'

import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'
import { Icon } from '@/shared/ui/Icon'

import styles from './styles.module.css'

type Default = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

interface Props extends Default {
    title?: string
}

export const Checkbox = ({ title }: PropsWithChildren<Props>) => {
    const [checked, setChecked] = useState(false)
    //width="8.008057" height="6.004089"
    return (
        <>
            <div
                className={styles.box}
                onClick={() => setChecked((prev) => !prev)}
            >
                <Icon as={'check_square'} color={'#323232'} />
                {checked && (
                    <div className={styles.mark}>
                        <Icon
                            as={'vector_mark'}
                            width={8}
                            height={6}
                            color={'#323232'}
                        />
                    </div>
                )}
            </div>
            {title && (
                <span
                    className={styles.title}
                    onClick={() => setChecked((prev) => !prev)}
                >
                    {title}
                </span>
            )}
            <input
                type='checkbox'
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className={styles.input}
            />
        </>
    )
}
