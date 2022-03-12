import React, { FC } from 'react'
import { ContactlessProviderProps } from '../types/ContactlessProvider'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../theming/index'

const ContactlessProvider: FC<ContactlessProviderProps> = ({
	theme = defaultTheme,
	children,
}) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ContactlessProvider
