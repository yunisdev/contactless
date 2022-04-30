import React, { FC } from 'react'
import styled from 'styled-components'
import { BlockProps } from '../types/Block'

const StyledBlock = styled.div<BlockProps>`
	width: calc(100% * ${(props) => props.size} / 12);
	padding: 0px 10px;
	box-sizing: border-box;
`

const Block: FC<BlockProps> = ({ children, size = 12, ...props }) => {
	return (
		<StyledBlock size={size} {...props}>
			{children}
		</StyledBlock>
	)
}

export default Block
