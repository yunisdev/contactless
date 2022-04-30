import React from 'react'
import { Story, Meta } from '@storybook/react'
import { BlockProps } from '../types/Block'
import Block from '../components/Block';

export default {
	title: 'Basics/Block',
	component: Block,
	argTypes: {
		// color: {
		// 	control: { type: 'color' },
		// },	
	},
} as Meta<typeof Block>

const Template: Story<BlockProps> = (args) => <Block {...args}></Block>

export const Default = Template.bind({})
Default.args = {
    
} as BlockProps
