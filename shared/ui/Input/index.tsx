import React from 'react'
import type { PropsWithChildren } from 'react'

import styles from './styles.module.css'

type Default = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

interface Props extends Default {}

export const Input = ({ ...rest }: PropsWithChildren<Props>) => {
    return <input type='text' className={styles.input} {...rest} />
}
