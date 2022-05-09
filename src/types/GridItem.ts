import { HTMLAttributes, ReactChild } from 'react'

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
	y?: number
	width?: number
	x?: number
	height?: number
}
