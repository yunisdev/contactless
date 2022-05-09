import React from 'react'
import { Story, Meta } from '@storybook/react'
import { GridItemProps } from '../types/GridItem'
import GridItem from '../components/layout/GridItem';

export default {
	title: 'Layout/GridItem',
	component: GridItem,
	argTypes: {
		// color: {
		// 	control: { type: 'color' },
		// },	
	},
} as Meta<typeof GridItem>

const Template: Story<GridItemProps> = (args) => <GridItem {...args}></GridItem>

export const Default = Template.bind({})
Default.args = {
    
} as GridItemProps
