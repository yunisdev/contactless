import * as React from 'react'
import {
	Button,
	Input,
	ContactlessProvider,
	Container,
	Block,
	createTheme,
	Grid,
	GridItem,
} from 'contactless'

const App = () => {
	const theme = createTheme({
		colors: {
			primary: 'blue',
		},
	})

	return (
		<ContactlessProvider theme={theme}>
			<Grid
				style={{ minHeight: 200 }}
				rows={3}
				columns={5}
				gap="10px"
			>
				<GridItem x={3} y={2} width={2}>
					<div
						style={{
							height: '100%',
							width: '100%',
							background: 'red',
						}}
					></div>
				</GridItem>
			</Grid>
		</ContactlessProvider>
	)
}

export default App
