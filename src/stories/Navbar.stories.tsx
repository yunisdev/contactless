import React, { Fragment } from 'react'
import { Story, Meta } from '@storybook/react'
import { NavbarProps } from '../types/Navbar'
import Navbar, { NavItem } from '../components/basics/Navbar'

export default {
	title: 'Basics/Navbar',
	component: Navbar,
	argTypes: {
		// color: {
		// 	control: { type: 'color' },
		// },
	},
} as Meta<typeof Navbar>

const Template: Story<NavbarProps> = (args) => {
	return <Navbar {...args}></Navbar>
}

export const Default = Template.bind({})
Default.args = {
	brand: <b>AA</b>,
	children: (
		<>
			<NavItem>aa</NavItem>
		</>
	),
} as NavbarProps
