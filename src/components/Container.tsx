import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'
import { Theme, useColor } from '../theming'
import { ContainerProps } from '../types/Container'

const StyledContainer = styled.div<ContainerProps>`
    padding: 10px 50px;
`

const Container: FC<ContainerProps> = ({ children, ...props }) => {
	return <StyledContainer {...props}>{children}</StyledContainer>
}

export default Container
