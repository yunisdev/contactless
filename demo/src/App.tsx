import * as React from 'react'
import {
	Button,
	Input,
	ContactlessProvider,
	Container,
	Block,
} from '../../src/.'
import { createTheme } from '../../src/theming'

const App = () => {
	const theme = createTheme({
		colors: {
			primary: 'blue',
		},
	})

	return (
		<ContactlessProvider theme={theme}>
			<Container>
				<Block size={6}>
					<Input />
				</Block>
				<Block size={3}>
					<Input />
				</Block>
			</Container>
		</ContactlessProvider>
	)
}

export default App
