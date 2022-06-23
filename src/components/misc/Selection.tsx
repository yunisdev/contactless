import { createGlobalStyle, css } from 'styled-components'
import { SelectionProps } from '../../types/Selection'

const Selection = createGlobalStyle<SelectionProps>`
	::selection {
		${(props) =>
			props.color &&
			css`
				color: ${props.color};
			`}
		${(props) =>
			props.background &&
			css`
				background: ${props.background};
			`}
	}
`

export default Selection
