import { Color } from '../types/global'

export interface Theme {
	colors: {
		primary: Color
		secondary: Color
		danger: Color
		success: Color
		warning: Color
		info: Color
	}
	custom?: object
}

export const defaultTheme: Theme = {
	colors: {
		primary: '#000000',
		secondary: '#2FA1B9',
		danger: '#dc3545',
		success: '#28a745',
		warning: '#ffc107',
		info: '#17a2b8',
	},
}

export function createTheme(theme: Theme): Theme {
	return {
		colors: {
			...defaultTheme.colors,
			...theme.colors,
		},
		custom: theme.custom,
	}
}
