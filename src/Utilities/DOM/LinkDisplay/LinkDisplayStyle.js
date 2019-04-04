import { colorTheme } from '../../../ColorThemeCenter/ColorThemeCenter';

export const styles = {
	'linkDisplay': {
	display: 'flex',
	overflow: 'hidden',
	border: (colorTheme.common.disableBorder)?'none':`0.32vmin solid ${colorTheme.common.borderColor}`,
	borderRadius: (colorTheme.common.disableBorder)?'0':'12px',
	fontWeight: 'bold',
	justifyContent: 'center',
	fontSize: '2.5vmin',
	margin: '0.3vmin',
	alignItems: 'center',
	color: colorTheme.common.textColor,
	backgroundColor: colorTheme.common.textBackgroundColor,
	'&:hover': {
		border: (colorTheme.common.disableBorder)?'none':`0.32vmin solid ${colorTheme.common.borderHoverColor}`
	}
}
};