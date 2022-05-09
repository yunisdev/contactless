import React, { FC } from 'react'
import styled, { css, useTheme } from 'styled-components'
import { Theme, useColor } from '../../theming'
import { GridItemProps } from '../../types/GridItem'

const StyledGridItem = styled.div<GridItemProps>`
	${(props) =>
		props.x &&
		css`
			grid-column: ${props.x} / span ${props.width};
		`}
	${(props) =>
		props.y &&
		css`
			grid-row: ${props.y} / span ${props.height};
		`}
`

const GridItem: FC<GridItemProps> = ({
	children,
	width = 1,
	height = 1,
	...props
}) => {
	return (
		<StyledGridItem width={width} height={height} {...props}>
			{children}
		</StyledGridItem>
	)
}

export default GridItem
