import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'
import { Theme } from '../theming'
import { ButtonProps } from '../types/Button'
import { useColor } from '../theming/index'

const StyledButton = styled.button<ButtonProps>`
	color: ${(props) => props.color};
	border: 2px solid
		${(props) => (props.secondary ? 'transparent' : props.color)};
	background: white;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	padding: ${(props) => {
		switch (props.size) {
			case 'small':
				return '5px 7.5px'
			case 'medium':
				return '8px 12px'
			case 'large':
				return '10px 15px'
			default:
				return '8px 12px'
		}
	}};
	opacity: ${(props) => (props.disabled ? '0.3' : '1')};
	font-size: ${(props) => {
		switch (props.size) {
			case 'small':
				return '16px'
			case 'medium':
				return '19px'
			case 'large':
				return '23px'
			default:
				return '19px'
		}
	}};
	box-sizing: border-box;
	transition: all 0.25s linear 0s;
	font-weight: 500;
	border-radius: 5px;
	&:hover {
		color: ${(props) => (props.secondary ? props.color : 'white')};
		border-color: ${(props) =>
			props.secondary ? 'transparent' : props.color};
		background: ${(props) =>
			props.secondary ? 'rgba(0,0,0,.05)' : props.color};
	}
`

const Button: FC<ButtonProps> = ({ children, color, ...props }) => {
	const [mainColor] = useColor([color])

	return (
		<StyledButton type="button" color={mainColor} {...props}>
			{children}
		</StyledButton>
	)
}

export default Button
