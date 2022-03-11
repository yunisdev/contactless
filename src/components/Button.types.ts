import { HTMLAttributes, ReactChild } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactChild
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    secondary?: boolean
}
