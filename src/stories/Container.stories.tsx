import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ContainerProps } from '../types/Container'
import Container from '../components/Container';

export default {
	title: 'Basics/Container',
	component: Container,
	argTypes: {
		// color: {
		// 	control: { type: 'color' },
		// },
		
	},
} as Meta<typeof Container>

const Template: Story<ContainerProps> = (args) => <Container {...args}></Container>

export const Default = Template.bind({})
Default.args = {
    style:{},
    children:'',
} as ContainerProps