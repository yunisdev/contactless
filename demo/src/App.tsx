import * as React from 'react'
import { Button, Input, ContactlessProvider } from '../../src/.'
import { createTheme } from '../../src/theming'

const App = () => {
	const theme = createTheme({
		colors:{
			primary:'blue'
		}
	})

	return (
		<ContactlessProvider theme={theme}>
			<Input />
		</ContactlessProvider>
	)
}

export default App