import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'
import { Theme, useColor } from '../../theming'
import { SelectProps } from '../../types/Select'

const StyledSelect = styled.div<SelectProps>``

const Select: FC<SelectProps> = ({ children, ...props }) => {
	return (
		<StyledSelect {...props}>
			<select></select>
		</StyledSelect>
	)
}

export default Select
