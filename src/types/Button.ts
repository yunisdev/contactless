import { HTMLAttributes, ReactChild } from 'react'
import { Color } from './global'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactChild
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    secondary?: boolean
    color?: Color
}
