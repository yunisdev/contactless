import React, { FC } from 'react'
import styled, { css, useTheme } from 'styled-components'
import { Theme, useColor } from '../../theming'
import { GridProps } from '../../types/Grid'

const StyledGrid = styled.div<GridProps>`
	display: grid;
	${(props) =>
		props.gap &&
		css`
			gap: ${props.gap};
		`}
	${(props) =>
		typeof props.rows === 'number'
			? css`
					grid-template-rows: repeat(${props.rows}, 1fr);
			  `
			: css`
					grid-template-rows: ${props.rows};
			  `}
	${(props) =>
		typeof props.columns === 'number'
			? css`
					grid-template-columns: repeat(${props.columns}, 1fr);
			  `
			: css`
					grid-template-columns: ${props.columns};
			  `}
`

const Grid: FC<GridProps> = ({ children, ...props }) => {
	return <StyledGrid {...props}>{children}</StyledGrid>
}

export default Grid
