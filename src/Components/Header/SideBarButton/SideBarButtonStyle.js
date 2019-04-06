import { colorTheme } from '../../../ColorThemeCenter/ColorThemeCenter';

export const styles = {
	'sideBarButton': {
	display: 'flex',
	flexBasis: '20%',
	overflow: 'hidden',
	border: (colorTheme.header.disableBorder)?'none':`0.32vmin solid ${colorTheme.header.borderColor}`,
	borderRadius: (colorTheme.header.disableBorder)?'0':'12px',
	color: colorTheme.header.textColor,
	backgroundColor: colorTheme.header.textBackgroundColor,
	fontWeight: 'bold',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: '3.3vmin',
	margin: '0.3vmin',
	'&:hover': {
		border: (colorTheme.header.disableBorder)?'none':`0.32vmin solid ${colorTheme.header.borderHoverColor}`,
	}
}
};