import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button from '../components/Button'
import { ButtonProps } from '../types/Button'

export default {
	title: 'Basics/Button',
	component: Button,
	argTypes: {
		color: {
			control: { type: 'color' },
		},
	},
} as Meta<typeof Button>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	disabled: false,
	secondary: false,
	children: 'Hello',
	color: '#000000',
	size: 'medium',
	onClick: () => window.alert('Button Clicked!'),
} as ButtonProps

export const Secondary = Template.bind({})
Secondary.args = {
	disabled: false,
	secondary: true,
	children: 'Hello',
	color: '#000000',
	size: 'medium',
	onClick: () => window.alert('Button Clicked!'),
} as ButtonProps

export const DisabledPrimary = Template.bind({})
DisabledPrimary.args = {
	disabled: true,
	secondary: false,
	children: 'Hello',
	color: '#000000',
	size: 'medium',
	onClick: () => window.alert('Button Clicked!'),
} as ButtonProps

export const DisabledSecondary = Template.bind({})
DisabledSecondary.args = {
	disabled: true,
	secondary: true,
	children: 'Hello',
	color: '#000000',
	size: 'medium',
	onClick: () => window.alert('Button Clicked!'),
} as ButtonProps
