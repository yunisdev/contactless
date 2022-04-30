import { useTheme } from 'styled-components'
import { Color } from '../types/global'

export interface Theme {
	colors: {
		primary?: Color
		secondary?: Color
		danger?: Color
		success?: Color
		warning?: Color
		info?: Color
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

export function useColor(colors: (Color | undefined)[] = []): Color[] {
	const theme = useTheme() as Theme
	let finalColors: Color[] = []

	for (var i = 0; i < colors.length; i++) {
		let color = colors[i]
		let finalColor

		if (!color) {
			finalColor = theme.colors.primary
			continue
		}

		switch (color) {
			case 'primary':
				finalColor = theme.colors.primary
				break
			case 'secondary':
				finalColor = theme.colors.secondary
				break
			case 'danger':
				finalColor = theme.colors.danger
				break
			case 'success':
				finalColor = theme.colors.success
				break
			case 'info':
				finalColor = theme.colors.info
				break
			case 'warning':
				finalColor = theme.colors.warning
				break
			default:
				finalColor = color
				break
		}

		finalColors.push(finalColor as Color)
	}

	return finalColors
}
