import React from 'react'
import { Story, Meta } from '@storybook/react'
import { SelectProps } from '../types/Select'
import Select from '../components/Select';

export default {
	title: 'Forms/Select',
	component: Select,
	argTypes: {
		// color: {
		// 	control: { type: 'color' },
		// },	
	},
} as Meta<typeof Select>

const Template: Story<SelectProps> = (args) => <Select {...args}></Select>

export const Default = Template.bind({})
Default.args = {
    
} as SelectProps
