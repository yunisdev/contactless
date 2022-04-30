import { HTMLAttributes, ReactChild } from 'react'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactChild
}
