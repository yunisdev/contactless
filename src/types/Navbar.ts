import { HTMLAttributes, ReactChild } from 'react'

export interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
	toggler?: ReactChild
	brand?: ReactChild
}

export interface NavLinkProps extends HTMLAttributes<HTMLDivElement> {
	to: string
}