import { HTMLAttributes, ReactChild } from 'react'
import CSS from 'csstype'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
	columns?: number | CSS.Property.GridTemplateColumns
	rows?: number | CSS.Property.GridTemplateRows
	gap?: CSS.Property.Gap
}
