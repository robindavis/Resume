import { colorTheme } from '../../../ColorThemeCenter/ColorThemeCenter';

export const styles = {
	'sideBarButton': {
	display: 'flex',
	flexBasis: '20%',
	overflow: 'hidden',
	border: (colorTheme.sidebar.disableBorder)?'none':`0.32vmin solid ${colorTheme.sidebar.borderColor}`,
	borderRadius: (colorTheme.sidebar.disableBorder)?'0':'12px',
	color: colorTheme.sidebar.textColor,
	backgroundColor: colorTheme.sidebar.textBackgroundColor,
	fontWeight: 'bold',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: '3.3vmin',
	margin: '0.3vmin',
	'&:hover': {
		border: (colorTheme.sidebar.disableBorder)?'none':`0.32vmin solid ${colorTheme.sidebar.borderHoverColor}`,
	}
}
};