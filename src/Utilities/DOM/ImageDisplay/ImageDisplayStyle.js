import { colorTheme } from '../../../ColorThemeCenter/ColorThemeCenter';

export const styles = {
	'imageContainer': {
	display: 'flex',
	overflow: 'hidden',
	border: (colorTheme.common.disableBorder)?'none':`0.32vmin solid ${colorTheme.common.borderColor}`,
	borderRadius: (colorTheme.common.disableBorder)?'0':'12px',
	margin: '0.3vmin',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: colorTheme.common.imageBackgroundColor,
	'&:hover': {
		border: (colorTheme.common.disableBorder)?'none':`0.32vmin solid ${colorTheme.common.borderHoverColor}`
	}
},
'imageDisplay': {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
}
};