import { HTMLAttributes, ReactChild } from 'react'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	flex?: boolean
    padding?: boolean
}
