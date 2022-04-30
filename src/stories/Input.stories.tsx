import React from 'react'
import { Story, Meta } from '@storybook/react'
import Input from '../components/Input'
import { InputProps } from '../types/Input'

export default {
	title: 'Forms/Input',
	component: Input,
	argTypes: {
		color: {
			control: { type: 'color' },
		},
		lineColor: {
			control: { type: 'color' },
		},
		backgroundColor: {
			control: { type: 'color' },
		},
	},
} as Meta<typeof Input>

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
	placeholder: 'Input...',
	type:'text',
	backgroundColor: 'rgb(235, 235, 235)',
	color: 'black',
	lineColor: 'black',
} as InputProps

export const Password = Template.bind({})
Password.args = {
	placeholder: 'Enter you password...',
	type:'password',
	backgroundColor: 'rgb(235, 235, 235)',
	color: 'black',
	lineColor: 'black',
} as InputProps