import React from 'react'

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
}

export const Button = ({ variant = ButtonType.primary }: Props) => {
    return <button />
}
