import { colorTheme } from '../../../ColorThemeCenter/ColorThemeCenter';

export const styles = {
	'sidebarCloseButton': {
	display: 'flex',
	flexBasis: '7%',
	overflow: 'hidden',
	backgroundColor: colorTheme.common.sidebarBackground
},
'crossIconSpace': {
	display: 'flex',
	flexBasis: '80%',
	overflow: 'hidden',
	border: 'none',
},
'crossIconContainer': {
	display: 'flex',
	flexBasis: '20%',
	overflow: 'hidden',
	justifyContent: 'flex-end',
	flexDirection: 'row'
},
'crossIcon': {
	display: 'flex',
  border: (colorTheme.common.disableBorder)?'none':`0.32vmin solid ${colorTheme.common.borderColor}`,
  borderRadius: (colorTheme.common.disableBorder)?'0':'12px',
	alignItems: 'center',
	fontSize: '6vmin',
	color: colorTheme.common.textColor,
	backgroundColor: colorTheme.common.textBackgroundColor
}
};