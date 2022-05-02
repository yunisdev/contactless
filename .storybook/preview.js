import ContactlessProvider from '../src/components/misc/ContactlessProvider'
import { createTheme } from '../src/theming'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /color$/i,
			date: /Date$/,
		},
	},
}

export const decorators = [
	(Story) => {
		const theme = createTheme({})

		return (
			<ContactlessProvider theme={theme}>
				<Story />
			</ContactlessProvider>
		)
	},
]
