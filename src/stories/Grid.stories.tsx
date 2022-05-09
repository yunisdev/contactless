import React from 'react'
import { Story, Meta } from '@storybook/react'
import { GridProps } from '../types/Grid'
import Grid from '../components/layout/Grid';

export default {
	title: 'Layout/Grid',
	component: Grid,
	argTypes: {
		// color: {
		// 	control: { type: 'color' },
		// },	
	},
} as Meta<typeof Grid>

const Template: Story<GridProps> = (args) => <Grid {...args}></Grid>

export const Default = Template.bind({})
Default.args = {
    
} as GridProps
