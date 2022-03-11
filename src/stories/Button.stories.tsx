import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button from '../components/Button'
import { ButtonProps } from '../components/Button.types'

export default {
    title: 'Contactless/Button',
    component: Button,
    argTypes: {},
} as Meta<typeof Button>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    disabled: false,
    secondary: false,
    children: 'Hello'
} as ButtonProps
