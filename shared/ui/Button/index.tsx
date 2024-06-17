import React from 'react'
import { classNames } from '@/shared/lib/index'

import styles from './styles.module.css'

type Default = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary',
}

interface Props extends Default {
    variant?: ButtonType
    rounded?: boolean
    rightIcon?: React.ReactNode
}

export const Button = ({
    variant = ButtonType.primary,
    rounded = false,
    children,
    rightIcon,
    ...rest
}: Props) => {
    return (
        <button
            className={classNames(
                styles.btn,
                {
                    [styles.withIcon]: !!rightIcon,
                    [styles.rounded]: rounded,
                },
                [styles[variant]]
            )}
            {...rest}
        >
            {children}
            {rightIcon && rightIcon}
        </button>
    )
}
