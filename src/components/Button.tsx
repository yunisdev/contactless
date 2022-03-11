import React, { FC } from 'react'
import styled from 'styled-components'

import { ButtonProps } from './Button.types'

const StyledButton = styled.button<ButtonProps>`
    color: black;
    border: 3px solid black;
    background: white;
    cursor: pointer;
    padding: 10px 15px;
    font-size: larger;
    box-sizing: border-box;
    transition: all 0.25s ease-in-out 0s;
    font-weight: 500;
    border-radius: 10px;
    &:hover {
        color: white;
        border: 3px solid black;
        background: black;
    }
`

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <StyledButton type="button" {...props}>
            {children}
        </StyledButton>
    )
}

export default Button
