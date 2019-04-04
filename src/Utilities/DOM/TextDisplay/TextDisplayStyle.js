import { colorTheme } from '../../../ColorThemeCenter/ColorThemeCenter';

export const styles = {
	'textDisplay': {
	display: 'flex',
	overflow: 'hidden',
	border: (colorTheme.common.disableBorder)?'none':`0.32vmin solid ${colorTheme.common.borderColor}`,
	borderRadius: (colorTheme.common.disableBorder)?'0':'12px',
	fontWeight: 'bold',
	margin: '0.3vmin',
	color: colorTheme.common.textColor,
	backgroundColor: colorTheme.common.textBackgroundColor,
	'&:hover': {
		border: (colorTheme.common.disableBorder)?'none':`0.32vmin solid ${colorTheme.common.borderHoverColor}`
	}
}
};
