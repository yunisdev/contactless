import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'
import { Theme, useColor } from '../theming'
import { BlockProps } from '../types/Block'

const StyledBlock = styled.div<BlockProps>`
	width: ${(props) => props.size};
`

const Block: FC<BlockProps> = ({ children, size = 12, ...props }) => {
	return <StyledBlock size={size} {...props}>{children}</StyledBlock>
}

export default Block
