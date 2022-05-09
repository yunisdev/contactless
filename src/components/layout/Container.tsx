import React, { FC } from 'react'
import styled, { css, useTheme } from 'styled-components'
import { Theme, useColor } from '../../theming'
import { ContainerProps } from '../../types/Container'

const StyledContainer = styled.div<ContainerProps>`
	${(props) =>
		props.padding
			? css`
					padding: 10px 50px;
			  `
			: css``}
	box-sizing: border-box;
	${(props) =>
		props.flex
			? css`
					display: flex;
					flex-wrap: wrap;
			  `
			: css``}
`

const Container: FC<ContainerProps> = ({
	children,
	flex = true,
	padding = true,
	...props
}) => {
	return (
		<StyledContainer flex={flex} padding={padding} {...props}>
			{children}
		</StyledContainer>
	)
}

export default Container
