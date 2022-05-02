import React, { FC, FormEvent, SyntheticEvent, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Theme } from '../../theming'
import { InputProps } from '../../types/Input'
import { useColor } from '../../theming/index'

const StyledInput = styled.input<InputProps>`
	& {
		border: none;
		background: ;
		outline: none !important;
		padding: 10px 15px;
		border-radius: 5px;
		color: ${(props) => props.color};
		background: ${(props) => props.backgroundColor};
	}
`

const StyledInputContainer = styled.div`
	& {
		width: fit-content;
		margin: 0;
		position: relative;
		border-radius: 5px;
		overflow: hidden;
	}
`

const BottomLine = styled.div`
	&.focused {
		transform: scale3d(1, 1, 1);
		transform-origin: 0 50%;
	}
	& {
		top: calc(100% - 2px);
		left: 0;
		width: 100%;
		height: 2px;
		position: absolute;
		transform: scale3d(0, 1, 1);
		transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
		background: ${(props) => props.color};
		transform-origin: 100% 50%;
		z-index: 999;
	}
`

const Input: FC<InputProps> = ({
	color = 'black',
	lineColor,
	backgroundColor = 'rgb(235, 235, 235)',
	value,
	onFocus,
	onBlur,
	onChange,
	...props
}) => {
	const [mainColor, _lineColor] = useColor([color, lineColor || color])
	const [focused, setFocused] = useState(false)
	const [_value, setValue] = useState('')

	return (
		<StyledInputContainer>
			<StyledInput
				{...props}
				color={mainColor}
				backgroundColor={backgroundColor}
				onFocus={(...params) => {
					setFocused(true)
					onFocus?.(...params)
				}}
				onBlur={(...params) => {
					setFocused(false)
					onBlur?.(...params)
				}}
				onChange={(e: FormEvent<HTMLInputElement>) => {
					setValue((e.target as HTMLInputElement).value)
					onChange?.(e)
				}}
				value={value}
			/>
			<BottomLine
				color={_lineColor}
				className={focused || _value.length > 0 ? 'focused' : ''}
			/>
		</StyledInputContainer>
	)
}

export default Input
