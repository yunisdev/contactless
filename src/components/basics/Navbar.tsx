import React, { FC, useRef, useState } from 'react'
import styled, { css, useTheme } from 'styled-components'
import { Theme, useColor } from '../../theming'
import { NavbarProps } from '../../types/Navbar'
import DefaultNavToggler from './DefaultNavToggler'

const StyledNavbar = styled.div<NavbarProps>`
	margin-top: 10px;
	margin-left: 10px;
	border-radius: 10px;
	width: calc(100% - 20px);
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
	position: fixed !important;
	box-sizing: border-box !important;
	top: 0 !important;
	left: 0 !important;
	z-index: 999;
	min-height: 50px;
	position: relative;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	padding: 0.5rem 1rem;

	@media (min-width: 768px) {
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-flow: row nowrap;
		flex-flow: row nowrap;
		-webkit-box-pack: start;
		-ms-flex-pack: start;
		justify-content: flex-start;
	}
`

const NavBrand = styled.a`
	font-weight: 800 !important;
	color: rgba(0, 0, 0, 0.9) !important;
	display: inline-block;
	padding-top: 5px;
	padding-bottom: 5px;
	padding-left: 5px;
	margin-right: 15px;
	font-size: 20px;
	line-height: inherit;
	white-space: nowrap;
	text-decoration: none !important;
`

const NavbarInner = styled.div<{ maxHeight: string }>`
	flex-basis: 100%;
	flex-grow: 1;
	overflow: hidden;
	align-items: center &.open {
		height: 100px;
	}
	@media (max-width: 768px) {
		&.close {
			max-height: 0;
		}
		&.open {
			max-height: ${(props) => props.maxHeight};
		}
	}
	@media (min-width: 768px) {
		display: -webkit-box !important;
		display: -ms-flexbox !important;
		display: flex !important;
		-ms-flex-preferred-size: auto;
		flex-basis: auto;
	}
	transition: max-height 0.35s ease;
`

const NavItems = styled.ul`
	display: flex;
	flex-direction: column;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
	margin-left: auto;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`

export const NavItem = styled.li`
	padding: 8px;
`

const NavToggler = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
	cursor: pointer;
`

const Navbar: FC<NavbarProps> = ({
	children,
	toggler = <DefaultNavToggler />,
	brand,
	...props
}) => {
	const [show, setShow] = useState(false)
	const nav_inner = useRef(null)

	return (
		<StyledNavbar {...props}>
			<NavBrand href="/">{brand}</NavBrand>
			<NavToggler
				onClick={() => {
					setShow(!show)
				}}
			>
				{toggler}
			</NavToggler>
			<NavbarInner
				maxHeight={
					(nav_inner.current as HTMLUListElement | null)
						?.clientHeight + 'px'
				}
				className={`${show ? 'open' : 'close'}`}
			>
				<NavItems ref={nav_inner}>{children}</NavItems>
			</NavbarInner>
		</StyledNavbar>
	)
}

export default Navbar
