# This script is for saving time when creating new component

__name__ : str = input("Enter name of component: ")

__category__ : str = input("Enter category of component [default: Basics]: ")

tsx = f"""\
import React, {{ FC }} from 'react'
import styled, {{ useTheme }} from 'styled-components'
import {{ Theme, useColor }} from '../../theming'
import {{ {__name__}Props }} from '../../types/{__name__}'

const Styled{__name__} = styled.div<{__name__}Props>``

const {__name__}: FC<{__name__}Props> = ({{ children, ...props }}) => {{
	return <Styled{__name__} {{...props}}>{{children}}</Styled{__name__}>
}}

export default {__name__}

"""

sb = f"""\
import React from 'react'
import {{ Story, Meta }} from '@storybook/react'
import {{ {__name__}Props }} from '../types/{__name__}'
import {__name__} from '../components/{__category__.lower()}/{__name__}';

export default {{
	title: '{__category__}/{__name__}',
	component: {__name__},
	argTypes: {{
		// color: {{
		// 	control: {{ type: 'color' }},
		// }},	
	}},
}} as Meta<typeof {__name__}>

const Template: Story<{__name__}Props> = (args) => <{__name__} {{...args}}></{__name__}>

export const Default = Template.bind({{}})
Default.args = {{
    
}} as {__name__}Props
"""

types = f"""\
import {{ HTMLAttributes, ReactChild }} from 'react'

export interface {__name__}Props extends HTMLAttributes<> {{
	children?: ReactChild
}}

"""

with open(f"src/types/{__name__}.ts","w") as f:
    f.write(types)

with open(f"src/stories/{__name__}.stories.tsx","w") as f:
    f.write(sb)

with open(f"src/components/{__category__.lower()}/{__name__}.tsx","w") as f:
    f.write(tsx)