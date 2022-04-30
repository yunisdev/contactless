import { HTMLAttributes } from 'react'
import { Color } from './global'

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
	color?: Color
	backgroundColor?: Color
	lineColor?: Color
	value?: string
}
