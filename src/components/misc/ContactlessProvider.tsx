import React, { FC, Fragment, StrictMode } from 'react'
import { ContactlessProviderProps } from '../../types/ContactlessProvider'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../theming/index'

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
		box-sizing: border-box;
		font-family: Open-Sans, Helvetica, Sans-Serif;
	}
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a {
		text-decoration: none;
	}
	p {
		word-break: break-all;
	}
	h1 {
		font-size: 2em;
	}
	h2 {
		font-size: 1.5em;
	}
	h3 {
		font-size: 1.17em;
	}
	h4 {
		font-size: 1em;
	}
	h5 {
		font-size: 0.83em;
	}
	h6 {
		font-size: 0.67em;
	}
`

const ContactlessProvider: FC<ContactlessProviderProps> = ({
	theme = defaultTheme,
	children,
}) => {
	return (
		<StrictMode>
			<GlobalStyle />
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</StrictMode>
	)
}

export default ContactlessProvider
